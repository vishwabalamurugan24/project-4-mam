const userModel = require("../models/userModel");

// Initialize table
userModel.createTable();

// Add User
const createUser = (req, res) => {
  const { name, email } = req.body;

  userModel.addUser(name, email, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "User added successfully" });
  });
};

// Get Users
const getAllUsers = (req, res) => {
  userModel.getUsers((err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Delete User
const removeUser = (req, res) => {
  const { id } = req.params;

  userModel.deleteUser(id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "User deleted successfully" });
  });
};

module.exports = {
  createUser,
  getAllUsers,
  removeUser,
};
