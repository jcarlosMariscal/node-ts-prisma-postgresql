import { Request, Response } from "express";
import { hashPassword } from "../services/password.service";
import prisma from "../models/user";
import { generateToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    if (!email) throw new Error("El email es obligatorio");
    if (!password) throw new Error("El password es obligatorio");
    const hashedPassword = await hashPassword(password);

    const user = await prisma.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken({ id: user.id, email: user.email });
    res.status(201).json({ token });
    console.log(token);
  } catch (error: any) {
    if (!email) {
      res.status(400).json({ error: "El email es obligatorio" });
    }
    if (!password) {
      res.status(400).json({ error: "El password es obligatorio" });
    }
    if (error?.code === "P2002" && error?.meta?.target?.includes("email")) {
      res.status(400).json({ error: "El email ingresado ya existe en bd" });
    }
    res.status(500).json({ error: "Hubo un error en el registro" });
  }
};
