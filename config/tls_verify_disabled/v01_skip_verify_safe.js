const https = require('https');
function client() { return new https.Agent({ rejectUnauthorized: true }); }
module.exports = { client };
