/**
 * SAFE mirror — insufficient_logging.js; the privileged action is audit-logged with actor +
 * target + outcome, CR/LF stripped so the log line cannot be forged (no CWE-117 either).
 */
'use strict';
const express = require('express');
const app = express();
const log = console;

app.post('/admin/delete-user', (req, res) => {
  const target = req.body.userId;
  const actor = req.get('X-Actor') || 'unknown';
  const safeActor = String(actor).replace(/[\r\n]/g, '');
  const safeTarget = String(target).replace(/[\r\n]/g, '');
  deleteUser(target);
  log.info('audit action=delete-user actor=%s target=%s outcome=ok', safeActor, safeTarget);  // audited
  res.send('deleted');
});

function deleteUser(_id) {}
