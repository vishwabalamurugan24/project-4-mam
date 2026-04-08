const { db, run, get } = require('../db');

class User {
    static async create({ name, identifier, password, role }) {
        const sql = `INSERT INTO users (name, identifier, password, role) VALUES (?, ?, ?, ?)`;
        return run(sql, [name, identifier, password, role]);
    }

    static async findByIdentifier(identifier) {
        const sql = `SELECT * FROM users WHERE identifier = ?`;
        return get(sql, [identifier]);
    }

    static async getAll() {
        const { all } = require('../db');
        return all(`SELECT id, name, identifier, role, status, createdAt FROM users`);
    }

    // Basic verify (in production, use bcrypt)
    static verify(user, password) {
        return user.password === password;
    }
}

module.exports = User;
