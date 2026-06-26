const express = require('express');
const vm = require('vm');
const app = express();
app.post('/load', express.raw({ type: '*/*' }), (req, res) => {
  vm.runInNewContext('x=' + req.body.toString());
  res.end('ok');
});
