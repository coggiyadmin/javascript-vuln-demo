const express = require('express'); const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'null'); // SINK CWE-346
  next();
});
module.exports = app;
