const jwt = require('jsonwebtoken');
function sign(payload) {
  return jwt.sign(payload, 'secret', { algorithm: 'HS256' }); // SINK hardcoded weak secret
}
module.exports = { sign };
