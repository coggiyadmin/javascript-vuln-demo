const express = require('express'); const app = express();
const LOOKUP = {0:0, 1:1, 2:2};
app.get('/e', (req, res) => {
  res.send(String(LOOKUP[Number(req.query.x)] ?? 0));
});
