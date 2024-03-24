# NODE + TS + PRISMA + POSTGRESQL + DOCKER

### Paso a paso.

1. Intalación de dependencias para el proyecto: `npm i express jsonwebtoken bcrypt @prisma/client dotenv typescript`
   - Express:
   - JsonWebToken:
   - bcrypt:
   - @prisma/client:
   - dotenv:
   - typescript:
2. Instalación de dependencias de desarrollo: `npm i ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt @types/node rimraf prisma --save-dev`
   - ts-node-dev:
   - @types/:
   - rimraf:
   - prisma:
3. Inicializar TypeScript en el proyecto: `npx tsc --init --outDir dist/ --rootDir src`
   - En el archivo `tsconfig.json` generado agregar las siguientes lineas:
     ```javascript
     "exclude": ["node_modules", "dist"],
      "include": ["src"],
     ```
4. Crear variables de entorno en `.env`.
5. Crear archivos `server.ts` y `app.ts` dentro de `src/`.
6. Crear rutas dentro de `routes/`.
7. Crear modelos necesarios dentro de `controllers/`.
8. Crear servicios que se usarán dentro de `services/`.
9. Crear controladores dentro de `controllers/` e importar los modelos y servicios necesarios.
10. Crear el archivo de configuración de docker `docker-compose.yml`.
    - Ejecutar `docker compose up -d` para inicializar docker.
11. Crear la base de datos con prisma ejecutando lo siguente:
    - `npx prisma init` : Una vez hecho, definir los modelos de las tablas en el archivo generado `prisma/schema.prisma`
    - `npx prisma generate`
    - `npx prisma migrate dev`
    - [OPCIONAL] Instalar TablePlus para ver la BD e iniciar una nueva conexión con PostgreSQL. Colocar el nombre, host, port, user, password y database de la conexión, tomar en consideración las variables de entorno.
