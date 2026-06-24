// trust_boundary variant: express-session store.
const express = require('express'); const session = require('express-session');
const app = express();
app.use(session({ secret: 'dev' }));
app.get('/role', (req, res) => {
  req.session.role = req.query.role; // SINK CWE-501
  res.end();
});
