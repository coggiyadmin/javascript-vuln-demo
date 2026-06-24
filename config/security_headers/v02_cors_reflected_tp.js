const express = require('express'); const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || ''); // SINK CWE-346
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
module.exports = app;
