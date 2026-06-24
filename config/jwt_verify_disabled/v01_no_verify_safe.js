const jwt = require('jsonwebtoken');
function decode(token, secret) {
  return jwt.verify(token, secret, { algorithms: ['HS256'] });
}
module.exports = { decode };
