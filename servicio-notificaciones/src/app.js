const express = require("express");
const bodyParser = require("body-parser");
const { sendNotification } = require("./notificationsController");

const app = express();
app.use(bodyParser.json());

app.post("/notifications", sendNotification);

app.listen(3003, () => {
  console.log("Servicio de Notificaciones escuchando en el puerto 3003");
});
