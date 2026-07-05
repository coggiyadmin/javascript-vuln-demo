const crypto = require('crypto');
function enc(key, data) {
  const iv = Buffer.alloc(16, 0); // SINK CWE-329 static zero IV
  const c = crypto.createCipheriv('aes-256-cbc', key, iv);
  return Buffer.concat([c.update(data), c.final()]);
}
module.exports = { enc };
