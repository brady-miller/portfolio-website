/**
 * Portfolio Website - 2019
 * Express Server
 */

// Require all dependencies
const express = require('express');
const ejs = require('ejs');

// Create the express app
const app = express();

// Configuration variables
const port = process.env.PORT || 3000;

// App configuration
app.set('view engine', ejs); // Use ejs for templating
express.static('public'); // Use the public folder to server assets

// Routes

// Root url, shows home page (www.example.com/)
app.get('/', (req, res) => {
    res.render('home');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});