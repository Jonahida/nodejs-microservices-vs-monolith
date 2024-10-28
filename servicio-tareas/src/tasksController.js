const { tasks } = require("./tasksModel");
const axios = require("axios");

function getAllTasks(req, res) {
  res.json(tasks);
}

function createTask(req, res) {
  const task = req.body;
  tasks.push(task);
  res.status(201).send(task);

  // Notificación asincrónica al servicio de notificaciones

  // Sin usar docker compose
  // axios.post('http://localhost:3003/notifications', {
  //  userId: task.userId,
  //  message: `Se ha creado una nueva tarea: ${task.title}`
  // });

  // Usando nombre del contenedor de Docker compose
  axios
    .post("http://servicio-notificaciones:3003/notifications/", {
      userId: task.userId,
      message: `Se ha creado una nueva tarea: ${task.title}`,
    })
    .then(() => {
      console.log("Notificación enviada con éxito.");
    })
    .catch((error) => {
      console.error("Error al enviar la notificación:", error);
    });
}

module.exports = {
  getAllTasks,
  createTask,
};
