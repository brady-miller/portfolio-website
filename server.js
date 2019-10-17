/**
 * Portfolio Website - 2019
 * Express Server
 */

// Require all dependencies
const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

// Create the express app
const app = express();

// Configuration variables
const port = process.env.PORT || 3000;

// App configuration
app.use(express.static(path.join(__dirname, 'dist'))); // Use the public folder to server assets
app.set('view engine', 'html');
// app.use('*', expressStaticGzip('dist'));

// Routes

// Root url, shows home page (www.example.com/)
app.get('/', (req, res) => {
    res.render('index.html');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});