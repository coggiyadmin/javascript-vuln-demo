/**
 * FN probe — CWE-778 Insufficient Logging. A failed authentication / privileged deletion is
 * performed with no audit log, so attacks are untraceable. NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();

app.post('/admin/delete-user', (req, res) => {
  const target = req.body.userId;
  // SECURITY EVENT (privileged delete) performed with NO audit log → CWE-778
  deleteUser(target);
  res.send('deleted');
});

function deleteUser(_id) {}
