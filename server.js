// Basic Server Setup and requirements
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// Serve Static Files
app.use(express.static('public'));

// Sending the Website Files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/calculator.html');
});

// Define Routes;

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'calculator.html'))
  );
}

const PORT = process.env.PORT || 16280;

app.listen(PORT, () => console.log(`Server Started on the PORT ${PORT}`));
