const express = require('express');
const app = express();
app.get('/oauth', (req, res) => {
  res.redirect(302, req.query.next); // SINK CWE-601 express.redirect
});
