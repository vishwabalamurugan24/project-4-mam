const db = require("../db");

// Create Table
const createTable = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);
};

// Add User
const addUser = (name, email) => {
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  return stmt.run(name, email);
};

// Get Users
const getUsers = () => {
  const stmt = db.prepare("SELECT * FROM users");
  return stmt.all();
};

// Delete User
const deleteUser = (id) => {
  const stmt = db.prepare("DELETE FROM users WHERE id = ?");
  return stmt.run(id);
};

module.exports = {
  createTable,
  addUser,
  getUsers,
  deleteUser,
};
