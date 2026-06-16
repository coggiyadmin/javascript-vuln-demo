const express = require('express');
const app = express();
// cors-null-origin (CWE-346)
app.use('/a', (req, res, next) => { res.header('Access-Control-Allow-Origin', 'null'); next(); });
// cors-http-origin (CWE-346): allowed origin uses insecure http://
app.use('/b', (req, res, next) => { res.header('Access-Control-Allow-Origin', 'http://app.example.com'); next(); });
// xfo-csp-mismatch (CWE-1021): XFO=DENY but CSP allows framing
app.use('/c', (req, res, next) => {
  res.header('X-Frame-Options', 'DENY');
  res.header('Content-Security-Policy', "frame-ancestors *");
  next();
});
// x-frame-options-allow-from (deprecated)
app.use('/d', (req, res, next) => { res.header('X-Frame-Options', 'ALLOW-FROM https://x.com'); next(); });
