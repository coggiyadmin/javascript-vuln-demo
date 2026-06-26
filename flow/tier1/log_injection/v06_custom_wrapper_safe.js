// custom_wrapper mirror — log_injection
const express = require('express'); const app = express();
app.post('/login', express.urlencoded(), (req, res) => {
  console.log('login user=' + req.body.user);
  res.end();
});
