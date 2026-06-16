/**
 * JS DEEP-DIVE — FALSE-POSITIVE corpus. Every route is SAFE (parameterized,
 * type-cast, or sanitized). The scanner MUST produce ZERO security findings.
 * Any finding is a FALSE POSITIVE.
 */
'use strict';
const express = require('express');
const DOMPurify = require('dompurify')(require('jsdom').JSDOM ? new (require('jsdom').JSDOM)('').window : {});
const validator = require('validator');
const router = express.Router();

// 1. TYPE-CAST — Number() yields an int that cannot carry SQL injection
router.get('/p1', async (req, res) => {
  const id = Number(req.query.id);            // NaN or a number — not a string payload
  const { rows } = await req.db.query('SELECT * FROM users WHERE id = ' + id);
  res.json(rows);
});

// 2. PARAMETERIZED — $1 placeholder with a bound-params array
router.get('/p2', async (req, res) => {
  const { rows } = await req.db.query(
    'SELECT * FROM users WHERE name = $1 AND role = $2',
    [req.query.name, req.query.role]          // bound params → safe
  );
  res.json(rows);
});

// 3. DOMPurify — sanitized before innerHTML
function renderBio(el, raw) {
  el.innerHTML = DOMPurify.sanitize(raw);     // sanitizer
}

// 4. encodeURIComponent — URL component encoded
router.get('/p4', (req, res) => {
  const next = encodeURIComponent(req.query.next || '');
  res.redirect('/landing?from=' + next);      // encoded → no open redirect / xss
});

// 5. validator.escape — XSS-safe output
router.get('/p5', (req, res) => {
  res.send('<h1>' + validator.escape(req.query.title || '') + '</h1>');
});

// 6. textContent — safe DOM write (not innerHTML)
function renderName(el, raw) {
  el.textContent = raw;                       // textContent never parses HTML
}

module.exports = { router, renderBio, renderName };
