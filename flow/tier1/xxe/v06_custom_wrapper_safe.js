const express = require('express');
const { parseString } = require('xml2js');
const app = express();
function companySanitize(s) { return String(s).replace(/<!ENTITY/g, ''); }
app.post('/xml', express.raw({ type: '*/*' }), (req, res) => {
  parseString(companySanitize(req.body.toString()), () => res.end('ok'));
});
