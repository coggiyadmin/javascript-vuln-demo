const express = require('express'); const BSON = require('bson');
const app = express();
app.post('/b', express.raw({ type: '*/*' }), (req, res) => {
  BSON.deserialize(req.body); // SINK CWE-502 bson npm
  res.end('ok');
});
