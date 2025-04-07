const express = require('express');
const app = express();

// Add logging and error handling
app.get('/', (req, res) => {
    try {
        console.log("Received request at /"); // Log when a request is received
        res.status(200).send('Hello, World!');
    } catch (error) {
        console.error('Error in GET / route:', error); // Log any error in the route
        res.status(500).send('Internal Server Error');
    }
});

// Export your express app if necessary for Azure Functions or other purposes
module.exports = app;
