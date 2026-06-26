'use strict';
const express = require('express'); const app = express();
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
app.get('/wrapped', (req, res) => { res.send(esc(req.query.q || '')); });
module.exports = app;
