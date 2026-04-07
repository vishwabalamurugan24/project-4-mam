const { run, all, get } = require('../db');

class Emergency {
    static async getAll() {
        const emergencies = await all('SELECT * FROM emergencies');
        for (let e of emergencies) {
            e.assignedUnits = await all('SELECT * FROM ambulances WHERE currentIncidentId = ?', [e.id]);
            e.patient = {
                name: e.patientName, age: e.patientAge, sex: e.patientSex, bloodType: e.patientBloodType
            };
            e.location = { lat: e.lat, lng: e.lng, address: e.address };
        }
        return emergencies;
    }
    static async create(data) {
        return await run(
            `INSERT INTO emergencies (referenceCode, type, priorityCode, patientName, patientAge, patientSex, patientBloodType, status, lat, lng, address)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.referenceCode, data.type, data.priorityCode, data.patientName, data.patientAge, data.patientSex, data.patientBloodType, data.status || 'Active', data.lat || 0, data.lng || 0, data.address || '']
        );
    }
}
module.exports = Emergency;
