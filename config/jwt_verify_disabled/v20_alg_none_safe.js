const jwt = require('jsonwebtoken');
function verify(token, key) {
  return jwt.verify(token, key, { algorithms: ['RS256'] }); // pinned asymmetric alg
}
module.exports = { verify };
