const express = require('express'); const ejs = require('ejs');
const app = express();
app.get('/hello', (req, res) => {
  res.send(ejs.render('<p>Hello ' + req.query.name + '</p>')); // SINK CWE-1336
});
