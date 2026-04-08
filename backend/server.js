require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const http = require('http');

// Initialize DB schema automatically
require('./db');

const Ambulance = require('./models/Ambulance');
const Emergency = require('./models/Emergency');
const SystemAlert = require('./models/SystemAlert');
const User = require('./models/User');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('Mobile/Web unit connected:', socket.id);
    
    socket.on('emergency_start', async (data) => {
        console.log('Emergency Signal Received:', data);
        
        // Persist to DB
        try {
            await Emergency.create({
                referenceCode: 'REQ-' + Date.now(),
                type: 'Medical Emergency',
                priorityCode: 'CODE-3',
                patientName: 'Unknown',
                patientAge: 0,
                patientSex: 'U',
                patientBloodType: 'U',
                status: 'Active',
                lat: data.lat || 0,
                lng: data.lng || 0,
                address: data.location || ''
            });
            await SystemAlert.create({
                severity: 'CRITICAL',
                message: `${data.ambulanceId} triggered an emergency protocol.`,
                relatedUnitId: data.ambulanceId
            });
        } catch (err) { console.error('Persistence error:', err); }

        io.emit('emergency_event', { ...data, type: 'start', timestamp: new Date() });
    });

    socket.on('emergency_stop', async (data) => {
        console.log('Emergency Situation Resolved:', data);
        await SystemAlert.create({
            severity: 'INFO',
            message: `${data.ambulanceId} emergency protocol cleared.`,
            relatedUnitId: data.ambulanceId
        });
        io.emit('emergency_event', { ...data, type: 'stop', timestamp: new Date() });
    });

    socket.on('gps_ping', (data) => {
        io.emit('gps_update', data);
    });

    socket.on('disconnect', () => console.log('Unit disconnected'));
});

app.use(cors());
app.use(bodyParser.json());

// Auth Endpoints
app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, identifier, password, role } = req.body;
        const result = await User.create({ name, identifier, password, role });
        res.status(201).json({ message: 'Personnel registered', id: result.id });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { identifier, password } = req.body;
        const user = await User.findByIdentifier(identifier);
        if (user && User.verify(user, password)) {
            res.json({ id: user.id, name: user.name, role: user.role, identifier: user.identifier });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/', (req, res) => res.send('Lifesaver Backend (SQLite) is running'));

app.get('/api/ambulances', async (req, res) => {
    try { res.json(await Ambulance.getAll()); }
    catch(err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/emergencies', async (req, res) => {
    try { res.json(await Emergency.getAll()); }
    catch(err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/alerts', async (req, res) => {
    try { res.json(await SystemAlert.getAll()); }
    catch(err) { res.status(500).json({ error: err.message }); }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));