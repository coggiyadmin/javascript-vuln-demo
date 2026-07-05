const { Client } = require('pg');
function connect() {
  return new Client({ host: 'db', user: 'app', password: process.env.DB_PASSWORD });
}
module.exports = { connect };
