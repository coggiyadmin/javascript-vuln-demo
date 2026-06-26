const express = require('express');
const app = express();
app.get('/s', (req, res) => {
  const q = String(req.query.q || '').replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  res.send('<h1>' + q + '</h1>');
});
