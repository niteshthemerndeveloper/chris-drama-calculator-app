// Basic Server Setup and requirements
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const connectCloudMongoDB = require('./config/mongoCloudDb.js');

// Connect To MongoDB -> To Save Customer in the MongoDB
connectCloudMongoDB();

// Initialize Express Middleware to parse received Data
app.use(express.json({ extended: false }));
app.use(cors());

// Serve Static Files
app.use(express.static('public'));

// Sending the Website Files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Define Routes;
// Create API Endpoint & Save Details in the MongoDB Database
app.use('/api/drama/calculator', require('./routes/dramaServer.js'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'index.html'))
  );
}

const PORT = process.env.PORT || 16280;

app.listen(PORT, () => console.log(`Server Started on the PORT ${PORT}`));
