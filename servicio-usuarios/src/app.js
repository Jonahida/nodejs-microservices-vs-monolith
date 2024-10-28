const express = require("express");
const bodyParser = require("body-parser");
const { getAllUsers, createUser } = require("./usersController");

const app = express();
app.use(bodyParser.json());

app.get("/users", getAllUsers);
app.post("/users", createUser);

app.listen(3002, () => {
  console.log("Servicio de Usuarios escuchando en el puerto 3002");
});
