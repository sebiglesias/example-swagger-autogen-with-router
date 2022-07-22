/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */


/* Routes */
import { mainRouter } from "./routes";

import swaggerUi from "swagger-ui-express";


import express from "express";

const app = express()
/* Middlewares */
app.use(mainRouter())
app.use('/doc', swaggerUi.serve, swaggerUi.setup("../swagger-output.json"))

app.listen(3000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")
})
