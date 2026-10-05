const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static files from project root
app.use(express.static(__dirname));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Alias spiderweb.png to the vector spiderweb asset
app.get('/spiderweb.png', (req, res) => {
  res.type('image/svg+xml').sendFile(path.join(__dirname, 'spiderweb.svg'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
