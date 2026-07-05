const jwt = require('jsonwebtoken');
function verify(token) {
  return jwt.verify(token, '', { algorithms: ['none'] }); // SINK alg:none accepted
}
module.exports = { verify };
