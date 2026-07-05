const crypto = require('crypto');
function enc(key, data) {
  const c = crypto.createCipheriv('des-ecb', key, null); // SINK CWE-327 DES
  return Buffer.concat([c.update(data), c.final()]);
}
module.exports = { enc };
