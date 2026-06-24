// trust_boundary variant: trusted auth cookie from query.
const express = require('express'); const app = express();
app.get('/admin', (req, res) => {
  res.cookie('is_admin', req.query.admin); // SINK CWE-501
  res.end();
});
