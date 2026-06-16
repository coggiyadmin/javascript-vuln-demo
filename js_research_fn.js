/**
 * JS DEEP-DIVE — FALSE-NEGATIVE corpus. Every route is a REAL vulnerability via
 * a JS-specific pattern engines commonly miss. Any route with NO finding is a
 * FALSE NEGATIVE.
 */
'use strict';
const express = require('express');
const { exec } = require('child_process');
const vm = require('vm');
const _ = require('lodash');
const serialize = require('node-serialize');
const router = express.Router();

// 1. TEMPLATE LITERAL — SQLi via `${}` interpolation (JS analog of concat)
router.get('/tpl-sql', async (req, res) => {
  const name = req.query.name;
  const rows = await req.db.query(`SELECT * FROM users WHERE name = '${name}'`); // CWE-89
  res.json(rows);
});

// 2. TEMPLATE LITERAL — command injection via `${}`
router.get('/tpl-cmd', (req, res) => {
  const host = req.query.host;
  exec(`ping -c 3 ${host}`, (e, out) => res.send(out)); // CWE-78
});

// 3. DOM XSS — client-side taint from location.hash into innerHTML
function initWidget() {
  const data = location.hash.slice(1);        // source: location.hash
  document.getElementById('out').innerHTML = data; // CWE-79 DOM XSS
}

// 4. PROTOTYPE POLLUTION — lodash merge of user-controlled object
router.post('/merge', (req, res) => {
  const target = {};
  _.merge(target, req.body);                  // CWE-1321 __proto__ pollution
  res.json(target);
});

// 5. PROTOTYPE POLLUTION — bracket assignment from user keys
router.post('/set', (req, res) => {
  const obj = {};
  obj[req.body.key] = req.body.value;         // CWE-1321 via __proto__ key
  res.json(obj);
});

// 6. node-serialize — insecure deserialization → RCE
router.post('/restore', (req, res) => {
  const obj = serialize.unserialize(req.body.data); // CWE-502 IIFE RCE
  res.json(obj);
});

// 7. vm.runInNewContext — code injection
router.get('/run', (req, res) => {
  const out = vm.runInNewContext(req.query.expr); // CWE-94
  res.json({ out });
});

// 8. setTimeout(string) — implicit eval of user input
router.get('/delay', (req, res) => {
  setTimeout(req.query.cb, 100);              // CWE-94 string→eval
  res.send('scheduled');
});

module.exports = { router, initWidget };
