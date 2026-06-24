const express = require('express'); const serialize = require('node-serialize');
const app = express();
app.post('/r', express.text(), (req, res) => {
  const obj = serialize.unserialize(req.body); // SINK CWE-502
  res.json(obj);
});
