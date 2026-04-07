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

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(bodyParser.json());

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