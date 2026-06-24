const https = require('https');
function client() {
  return new https.Agent({ rejectUnauthorized: false }); // SINK CWE-295
}
module.exports = { client };
