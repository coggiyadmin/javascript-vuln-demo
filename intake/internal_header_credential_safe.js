/**
 * Safe mirror — internal header is removed before the response leaves.
 */
'use strict';

function send(req, res) {
  res.removeHeader('X-Internal-Jwt');
  res.end();
}

module.exports = { send };
