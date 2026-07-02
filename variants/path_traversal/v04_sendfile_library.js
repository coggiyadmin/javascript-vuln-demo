const express = require('express');
const app = express();
app.get('/f', (req, res) => {
  const name = String(req.query.name || '');
  res.sendFile('/var/data/' + name); // SINK CWE-22 express.sendFile
});
