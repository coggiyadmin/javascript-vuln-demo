/**
 * TP — paid-feature gate trusts a request header (CWE-807).
 * CVE-2026-112378 class: AI Gateway enablement header.
 */
'use strict';

function aiEnabled(req) {
  return req.headers['x-ai-gateway-enabled'] === '1'; // SINK CWE-807
}

module.exports = { aiEnabled };
