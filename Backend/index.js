import express from 'express';
import bodyParser from 'body-parser';
// Import the necessary modules

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Booking System API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});