const userModel = require("../models/userModel");

// Initialize table
try {
  userModel.createTable();
} catch (error) {
  console.error("❌ Failed to initialize database table:", error.message);
}

// Add User
const createUser = (req, res) => {
  const { name, email } = req.body;

  try {
    userModel.addUser(name, email);
    res.json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Users
const getAllUsers = (req, res) => {
  try {
    const rows = userModel.getUsers();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete User
const removeUser = (req, res) => {
  const { id } = req.params;

  try {
    userModel.deleteUser(id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  removeUser,
};
