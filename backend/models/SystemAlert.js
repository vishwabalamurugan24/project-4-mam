const { run, all, get } = require('../db');

class SystemAlert {
  static async getAll() {
    return await all('SELECT * FROM system_alerts ORDER BY id DESC LIMIT 50');
  }
  static async create(data) {
    return await run(
      `INSERT INTO system_alerts (severity, message, relatedUnitId) VALUES (?, ?, ?)`,
      [data.severity || 'INFO', data.message, data.relatedUnitId || null]
    );
  }
}
module.exports = SystemAlert;
