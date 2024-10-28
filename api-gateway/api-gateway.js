// api-gateway.js
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint para crear tareas a través del API Gateway
app.post("/tasks", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:3002/tasks", req.body);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(500).send({ message: "Error al crear la tarea" });
  }
});

// Iniciar el servidor del API Gateway
app.listen(port, () => {
  console.log(`API Gateway escuchando en http://localhost:${port}`);
});
