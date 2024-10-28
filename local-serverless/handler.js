const axios = require("axios");

module.exports.manageTasks = async (event) => {
  const taskId = event.pathParameters ? event.pathParameters.id : null;

  try {
    const response = await axios.get(
      `http://localhost:3000/api/tasks/${taskId}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ message: "Error al obtener la tarea" }),
    };
  }
};
