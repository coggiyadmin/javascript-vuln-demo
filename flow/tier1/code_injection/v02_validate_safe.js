const express = require('express'); const app = express();
const ALLOWED = new Set(['0','1','2']);
app.get('/e', (req, res) => {
  const x = String(req.query.x || '');
  if (!ALLOWED.has(x)) return res.status(403).end();
  res.send(String(eval(x)));
});
