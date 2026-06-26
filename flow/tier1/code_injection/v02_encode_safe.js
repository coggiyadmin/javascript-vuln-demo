const express = require('express'); const app = express();
app.get('/e', (req, res) => {
  const x = String(req.query.x || '').replace(/__/g, '');
  res.send(String(eval(x)));
});
