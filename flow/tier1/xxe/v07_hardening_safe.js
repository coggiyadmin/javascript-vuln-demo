const express = require('express');
const { parseString } = require('xml2js');
const app = express();
app.post('/xml', express.raw({ type: '*/*', limit: '64kb' }), (req, res) => {
  parseString(req.body.toString(), () => res.end('ok'));
});
