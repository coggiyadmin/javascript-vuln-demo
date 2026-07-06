// SAFE — async read intent.
const fs = require('fs').promises;
async function handle(reqId) {
  const body = await fs.readFile('/tmp/' + reqId, 'utf8');
  return body.toUpperCase();
}
module.exports = { handle };
