const express = require('express');
const app = express();
// cognium-dev#629 — no-argument end() is not an XSS sink
app.get('/f', (req, res) => {
  const name = req.query.name;
  if (!/^[a-z]+$/.test(name)) { return res.status(400).end(); }
  res.send('ok');
});
