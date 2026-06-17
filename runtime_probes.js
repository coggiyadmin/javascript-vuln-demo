/**
 * DEMO FILE — FALSE-NEGATIVE runtime probes. Each block is an intentional vulnerability.
 * Any block with NO finding is a FALSE NEGATIVE.
 */
'use strict';
const express = require('express');
const { execSync } = require('child_process');
const protobuf = require('protobufjs');
const router = express.Router();

// CWE-78 — Git branch name interpolated into execSync during CI test selection.
router.post('/wdio-select', (req, res) => {
  const branch = req.body.branch || process.env.GIT_BRANCH || 'main';
  const out = execSync(
    `git diff --name-only origin/main...${branch} | xargs -I{} wdio run --spec {}`
  ); // CWE-78
  res.send(out);
});

// CWE-94 — protobufjs unsafe codegen from attacker-supplied schema text at runtime.
router.post('/proto-load', (req, res) => {
  const schemaText = req.body.schema;
  const root = protobuf.parse(schemaText).root; // CWE-94
  const Message = root.lookupType(req.body.type);
  res.json(Message.decode(Buffer.from(req.body.payload, 'base64')));
});

// CWE-89 + CWE-200 — admin reset-token oracle leaks secret via SQL response.
router.post('/admin/reset-token', async (req, res) => {
  const email = req.body.email;
  const row = await req.db.query(
    `SELECT reset_token FROM admin_users WHERE email = '${email}'`
  ); // CWE-89
  res.json({ found: row.length > 0, token: row[0]?.reset_token });
});

// CWE-89 — user-controlled column name in DDL statement.
router.post('/content-type/field', async (req, res) => {
  const field = req.body.fieldName;
  await req.db.query(
    `ALTER TABLE content_types ADD COLUMN ${field} VARCHAR(255)`
  ); // CWE-89
  res.json({ ok: true });
});

// CWE-400 — peer-supplied blob stored without size cap.
router.post('/dht/put', async (req, res) => {
  const { key, value } = req.body;
  const store = req.app.locals.dhtStore || (req.app.locals.dhtStore = {});
  store[key] = Buffer.from(value, 'base64'); // CWE-400
  res.json({ stored: store[key].length });
});

module.exports = router;
