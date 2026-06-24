// SAFE — GCM mode with random IV.
const crypto = require('crypto');
function enc(buf) {
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', crypto.randomBytes(32), iv);
  return Buffer.concat([iv, c.update(buf), c.final(), c.getAuthTag()]);
}
module.exports = { enc };
