import { JwtPayload } from "../models/jwt.interface";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
};
// export const generateToken = (user: User): string => {
//   return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
//     expiresIn: "1h",
//   });
// };
