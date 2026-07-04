// FP-target (N4 real dep) — ioredis .get issues RESP GET, not OS exec (#170).
const Redis = require('ioredis');

function cacheGet(client, key) {
  return client.get(key); // real ioredis API — protocol verb, NOT OS exec
}
module.exports = { cacheGet };
