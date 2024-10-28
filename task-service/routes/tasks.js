const express = require("express");
const Task = require("../models/Task");
const { authenticateToken } = require("./auth"); // Asegúrate de que esta línea sea correcta
const router = express.Router();

// Crear una nueva tarea
router.post("/", authenticateToken, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    user: req.user.userId, // Almacenar el ID del usuario que creó la tarea
  });

  try {
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todas las tareas
router.get("/", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar una tarea
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).send("Tarea no encontrada");
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Eliminar una tarea
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send("Tarea no encontrada");
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
