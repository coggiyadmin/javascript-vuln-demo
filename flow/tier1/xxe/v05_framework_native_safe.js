const express = require('express');
const { parseString } = require('xml2js');
const app = express();
app.post('/xml', express.raw({ type: '*/*' }), (req, res) => {
  parseString(req.body.toString(), { explicitRoot: false }, () => res.end('ok'));
});
