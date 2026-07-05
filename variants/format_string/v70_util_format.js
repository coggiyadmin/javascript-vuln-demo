const express = require('express'); const util = require('util');
const app = express();
app.get('/f', (req, res) => {
  res.send(util.format(req.query.fmt, 'arg')); // SINK CWE-134 user-controlled format
});
