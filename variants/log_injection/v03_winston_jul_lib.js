const express = require('express'); const winston = require('winston');
const app = express(); const log = winston.createLogger({ transports: [new winston.transports.Console()] });
app.get('/l', (req, res) => {
  log.warn('user=' + req.query.user); // SINK CWE-117 winston
  res.end('ok');
});
