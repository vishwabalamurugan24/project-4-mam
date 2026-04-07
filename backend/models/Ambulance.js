const { run, all, get } = require('../db');

class Ambulance {
    static async getAll() {
        return await all('SELECT * FROM ambulances');
    }
    static async create(data) {
        return await run(
            `INSERT INTO ambulances (unitId, status, lat, lng, speed, v2vSignalStrength, currentIncidentId, assignedHospital)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.unitId, data.status || 'Available', data.lat || 0, data.lng || 0, data.speed || 0, data.v2vSignalStrength || 100, data.currentIncidentId || null, data.assignedHospital || null]
        );
    }
}
module.exports = Ambulance;
