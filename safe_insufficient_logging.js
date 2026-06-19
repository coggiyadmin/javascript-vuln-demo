/**
 * SAFE mirror — insufficient_logging.js; the privileged action is audit-logged with actor +
 * target + outcome.
 */
'use strict';
const express = require('express');
const app = express();
const log = console;

app.post('/admin/delete-user', (req, res) => {
  const target = req.body.userId;
  const actor = req.get('X-Actor') || 'unknown';
  deleteUser(target);
  log.info('audit action=delete-user actor=%s target=%s outcome=ok', actor, target);  // audited
  res.send('deleted');
});

function deleteUser(_id) {}
