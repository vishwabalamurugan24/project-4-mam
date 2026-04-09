const Database = require("better-sqlite3");

const db = new Database("database.sqlite");

console.log("✅ Connected to database (better-sqlite3)");

module.exports = db;
