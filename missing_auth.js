'use strict';
// CWE-306 — Missing Authentication for Critical Function. A destructive admin endpoint has
// no authentication/authorization check. (Engine gap / partial.) FN probe.
const express = require('express');
const app = express();
let users = [{ id: 1 }];

app.post('/admin/purge', (req, res) => {
  users = [];   // no auth check on a destructive, privileged action → CWE-306
  res.end('purged');
});
module.exports = app;
