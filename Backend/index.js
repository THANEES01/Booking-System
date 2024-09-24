import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname since it's not available in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
});

// Route to serve the bookings.html file
app.get('/bookings', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'bookings.html'));
});

// Route to serve the rooms.html file
app.get('/rooms', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'rooms.html'));
});

// Route to serve the contact.html file
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'contact.html'));
});

// Database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Booking",
    password: "#As011416#",
    port: 5432,
});

db.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});