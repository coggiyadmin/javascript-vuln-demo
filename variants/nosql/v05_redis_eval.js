const express = require('express'); const Redis = require('ioredis');
const app = express(); const redis = new Redis();
app.get('/eval', (req, res) => {
  const script = req.query.script || 'return 0';
  redis.eval(script, 0); // SINK CWE-943 Redis EVAL user script
  res.end('ok');
});
