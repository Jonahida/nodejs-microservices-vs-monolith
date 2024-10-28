function sendNotification(req, res) {
  const { userId, message } = req.body;
  // Simulación de enviar una notificación
  console.log(`Enviando notificación al usuario ${userId}: ${message}`);
  res.status(200).send({ status: "Notification sent" });
}

module.exports = {
  sendNotification,
};
