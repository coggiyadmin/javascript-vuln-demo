// weak_crypto TP — createCipheriv ECB (CWE-327).
const crypto = require('crypto');
const KEY = Buffer.alloc(16, 1);
function enc(buf) {
  return crypto.createCipheriv('aes-128-ecb', KEY, null).update(buf); // SINK CWE-327
}
module.exports = { enc };
