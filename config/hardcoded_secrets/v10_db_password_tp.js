const { Client } = require('pg');
function connect() {
  return new Client({ host: 'db', user: 'app', password: 'S3cr3tP@ss!' }); // SINK CWE-798
}
module.exports = { connect };
