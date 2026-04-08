const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Error connecting to database', err);
    else console.log('Connected to SQLite database');
});

const run = (sql, params = []) => new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, changes: this.changes });
    });
});

const all = (sql, params = []) => new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
    });
});

const get = (sql, params = []) => new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
    });
});

// Initialize schema
const initDB = async () => {
    await run(`
        CREATE TABLE IF NOT EXISTS ambulances (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            unitId TEXT UNIQUE,
            status TEXT DEFAULT 'Available',
            lat REAL DEFAULT 0,
            lng REAL DEFAULT 0,
            speed REAL DEFAULT 0,
            v2vSignalStrength REAL DEFAULT 100,
            currentIncidentId INTEGER,
            assignedHospital TEXT
        )
    `);

    await run(`
        CREATE TABLE IF NOT EXISTS emergencies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            referenceCode TEXT UNIQUE,
            type TEXT,
            priorityCode TEXT,
            patientName TEXT,
            patientAge INTEGER,
            patientSex TEXT,
            patientBloodType TEXT,
            status TEXT DEFAULT 'Active',
            lat REAL DEFAULT 0,
            lng REAL DEFAULT 0,
            address TEXT
        )
    `);

    await run(`
        CREATE TABLE IF NOT EXISTS system_alerts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            severity TEXT DEFAULT 'INFO',
            message TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            relatedUnitId TEXT
        )
    `);

    await run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            identifier TEXT UNIQUE,
            password TEXT,
            role TEXT,
            status TEXT DEFAULT 'Active',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
}

initDB();

module.exports = { db, run, all, get };
