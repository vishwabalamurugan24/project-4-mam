const db = require("../db");

// Create Table
const createTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);
};

// Add User
const addUser = (name, email, callback) => {
  db.run(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    callback
  );
};

// Get Users
const getUsers = (callback) => {
  db.all("SELECT * FROM users", [], callback);
};

// Delete User
const deleteUser = (id, callback) => {
  db.run("DELETE FROM users WHERE id = ?", [id], callback);
};

module.exports = {
  createTable,
  addUser,
  getUsers,
  deleteUser,
};
