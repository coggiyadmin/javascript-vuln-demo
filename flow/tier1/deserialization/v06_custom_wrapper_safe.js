// custom_wrapper mirror — deserialization
const express = require('express');
const app = express();
app.post('/r', express.json(), (req, res) => {
  res.json({ ok: true, keys: Object.keys(req.body) });
});
