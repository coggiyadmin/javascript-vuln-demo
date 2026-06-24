const jwt = require('jsonwebtoken');
function decode(token) {
  return jwt.verify(token, 'ignored', { algorithms: ['none'] }); // SINK CWE-347
}
module.exports = { decode };
