const express = require('express'); const pug = require('pug');
const app = express();
app.get('/t', (req, res) => {
  res.end(pug.render('p Hello ' + req.query.name)); // SINK CWE-94 pug compile
});
