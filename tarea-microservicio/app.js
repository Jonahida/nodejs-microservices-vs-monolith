// app.js
const express = require("express");
const app = express();
const port = 3002;

// Middleware para parsear JSON
app.use(express.json());

// Simulación de base de datos en memoria
const tareas = [];

// Endpoint para crear nuevas tareas
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  // Validaciones de entrada
  if (!title || !description) {
    return res
      .status(400)
      .send({ message: "Título y descripción son obligatorios" });
  }

  // Crear una nueva tarea
  const nuevaTarea = { id: tareas.length + 1, title, description };
  tareas.push(nuevaTarea);

  res.status(201).send({ message: "Tarea creada", tarea: nuevaTarea });
});

// Endpoint para obtener todas las tareas
app.get("/tasks", (req, res) => {
  res.status(200).send(tareas);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(
    `Servicio de Creación de Tareas escuchando en http://localhost:${port}`
  );
});
