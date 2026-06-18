'use strict';
// Combination #11 — FAN-OUT / dedup (JS). One tainted source reaches multiple distinct
// web sinks; expect one finding per sink type (ssrf + path_traversal + open_redirect).
const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();

app.get('/fanout', (req, res) => {
  const u = req.query.u || '';                 // single SOURCE
  http.get(u);                                  // sink 1 — ssrf (CWE-918)
  fs.readFileSync('/srv/app/data/' + u);        // sink 2 — path_traversal (CWE-22)
  res.redirect(u);                              // sink 3 — open_redirect (CWE-601)
});
module.exports = app;
