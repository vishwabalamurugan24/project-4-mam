const { run, db } = require('./db');
const Ambulance = require('./models/Ambulance');
const Emergency = require('./models/Emergency');
const SystemAlert = require('./models/SystemAlert');

const seedDatabase = async () => {
    try {
        console.log("Connected to SQLite, starting seed process...");

        // Clear existing
        await run(`DELETE FROM ambulances`);
        await run(`DELETE FROM emergencies`);
        await run(`DELETE FROM system_alerts`);

        console.log("Cleared existing data.");

        const e1 = await Emergency.create({
            referenceCode: '#AX-9921',
            type: 'Respiratory Distress',
            priorityCode: 'Code Red',
            patientName: 'JOHNSON, MARCUS',
            patientAge: 58,
            patientSex: 'M',
            patientBloodType: 'O-POSITIVE',
            status: 'Active',
            lat: 41.8781,
            lng: -87.6298,
            address: 'Market & 5th St Intersection'
        });

        await Ambulance.create({
            unitId: 'AMB-742', status: 'En Route',
            lat: 41.8781, lng: -87.6298,
            speed: 65, v2vSignalStrength: 98,
            currentIncidentId: e1.id,
            assignedHospital: 'ST. JUDE MEDICAL CENTER'
        });

        await Ambulance.create({
            unitId: 'AMB-991', status: 'On Scene',
            speed: 0, v2vSignalStrength: 95
        });

        await Ambulance.create({
            unitId: 'AMB-108', status: 'Available',
            speed: 0, v2vSignalStrength: 100
        });

        await SystemAlert.create({
            severity: 'CRITICAL',
            message: 'Multiple vehicle collision detected on I-280 Northbound. AMB-742 dispatched.',
            relatedUnitId: 'AMB-742'
        });

        await SystemAlert.create({
            severity: 'INFO',
            message: 'Traffic rerouted at S Van Ness Ave to facilitate emergency corridor Alpha-6.'
        });

        await SystemAlert.create({
            severity: 'STATUS',
            message: 'Unit AMB-108 successfully completed refueling. Status updated to AVAILABLE.',
            relatedUnitId: 'AMB-108'
        });

        console.log("Mock data successfully seeded!");
        db.close();
        process.exit(0);
    } catch (err) {
        console.error("Error seeding database:", err);
        process.exit(1);
    }
};

setTimeout(seedDatabase, 1000); // give schema time to init
