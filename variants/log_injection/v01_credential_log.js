const express = require('express'); const app = express();
app.post('/login', express.urlencoded(), (req, res) => {
  console.log('login user=' + req.body.user + ' password=' + req.body.password); // SINK CWE-117
  res.end();
});
