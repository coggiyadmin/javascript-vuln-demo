const express = require('express'); const util = require('util');
const app = express();
app.get('/greet', (req, res) => {
  const fmt = String(req.query.fmt || '%s'); // SOURCE
  res.send(util.format(fmt, 'guest')); // SINK CWE-134
});
