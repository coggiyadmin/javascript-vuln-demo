const crypto = require('crypto');
function digest(pw) { return crypto.createHash('sha256').update(pw).digest('hex'); }
module.exports = { digest };
