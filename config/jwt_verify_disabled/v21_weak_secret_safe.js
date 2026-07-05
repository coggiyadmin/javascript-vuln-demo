const jwt = require('jsonwebtoken');
function sign(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256' }); // from env
}
module.exports = { sign };
