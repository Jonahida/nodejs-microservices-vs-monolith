const express = require("express");
const bodyParser = require("body-parser");
const { getAllTasks, createTask } = require("./tasksController");

const app = express();
app.use(bodyParser.json());

app.get("/tasks", getAllTasks);
app.post("/tasks", createTask);

app.listen(3001, () => {
  console.log("Servicio de Tareas escuchando en el puerto 3001");
});
