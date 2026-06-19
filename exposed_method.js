/**
 * FN probe — CWE-749 Exposed Dangerous Method or Function. An admin "run command" method is
 * exposed on an unauthenticated route. Real vuln; NO finding = FN.
 */
'use strict';
const express = require('express');
const { execSync } = require('child_process');
const app = express();

app.get('/admin/maintenance', (req, res) => {
  // privileged maintenance action exposed with no auth gate → CWE-749
  const out = execSync('/opt/app/bin/cleanup.sh').toString();
  res.send(out);
});
