/**
 * NEGATIVE TEST FILE — safe mirrors of runtime_probes.js patterns.
 *
 * The scanner MUST produce ZERO security findings here. Any finding is a
 * FALSE POSITIVE.
 */
'use strict';
const express = require('express');
const { execFile } = require('child_process');
const router = express.Router();

// SAFE command — fixed argv only; no user-controlled branch interpolation.
router.post('/wdio-select', (req, res) => {
  execFile('git', ['diff', '--name-only', 'origin/main...main'], (err, stdout) => {
    if (err) return res.status(500).json({ error: err.message });
    res.send(stdout);
  });
});

// SAFE protobuf — schema loaded from bundled deploy artifact; no runtime user schema text.
router.post('/proto-load', (req, res) => {
  res.json({ type: 'Event', fields: ['name', 'value'] });
});

// SAFE sql — parameterized query with bound params (js_research_fp /p2 pattern).
router.get('/admin/reset-token', async (req, res) => {
  const { rows } = await req.db.query(
    'SELECT id FROM admin_users WHERE email = $1',
    [req.query.name]
  );
  res.json({ found: rows.length > 0 });
});

// SAFE sql — switch/map selects a constant DDL string.
router.post('/content-type/field', async (req, res) => {
  const field = String(req.body.fieldName || '');
  let ddl = null;
  switch (field) {
    case 'title':
      ddl = 'ALTER TABLE content_types ADD COLUMN IF NOT EXISTS title VARCHAR(255)';
      break;
    case 'slug':
      ddl = 'ALTER TABLE content_types ADD COLUMN IF NOT EXISTS slug VARCHAR(255)';
      break;
    case 'summary':
      ddl = 'ALTER TABLE content_types ADD COLUMN IF NOT EXISTS summary TEXT';
      break;
    default:
      return res.status(400).json({ error: 'column not allowed' });
  }
  await req.db.query(ddl);
  res.json({ ok: true });
});

// SAFE resource — fixed-size constant blob in fixed slot.
router.post('/dht/put', async (req, res) => {
  const store = req.app.locals.dhtStore || (req.app.locals.dhtStore = {});
  const buf = Buffer.from('dGVzdA==', 'base64');
  store['0'] = buf;
  res.json({ stored: buf.length });
});

module.exports = { router };
