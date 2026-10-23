/**
 * TP — compiles a caller-supplied pattern (CWE-1333 class).
 * CVE-2026-110264 is an integer overflow in the native regexp compiler.
 * This pair covers user-controlled compilation only. No overflow input.
 *
 * The pattern comes from the query string in this file. A bare parameter is
 * not a source on the default scan (cognium-dev #292).
 */
'use strict';
const express = require('express');
const app = express();

function compile(pattern) {
  return new RegExp(pattern); // SINK
}

app.get('/compile', (req, res) => {
  compile(req.query.pattern);
  res.end('ok');
});

module.exports = { compile, app };
