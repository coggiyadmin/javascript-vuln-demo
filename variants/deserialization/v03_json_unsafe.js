const express = require('express'); const app = express();
app.post('/j', express.json(), (req, res) => {
  const obj = JSON.parse(req.body.payload); // SINK CWE-502 when prototype pollution chain
  res.json(obj);
});
