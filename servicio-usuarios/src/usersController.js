const { users } = require("./usersModel");

function getAllUsers(req, res) {
  res.json(users);
}

function createUser(req, res) {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
}

module.exports = {
  getAllUsers,
  createUser,
};
