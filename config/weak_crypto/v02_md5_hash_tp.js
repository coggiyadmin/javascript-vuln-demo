const crypto = require('crypto');
function digest(pw) { return crypto.createHash('md5').update(pw).digest('hex'); } // SINK CWE-328
module.exports = { digest };
