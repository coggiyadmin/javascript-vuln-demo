/**
 * TP — internal credential is copied onto the response (CWE-200).
 * CVE-2026-105777 class.
 */
'use strict';

function send(res) {
  const token = process.env.GITLAB_INTERNAL_TOKEN;
  res.setHeader('X-Internal-Jwt', token); // SINK CWE-200
  res.end();
}

module.exports = { send };
