const { exec } = require('child_process');
function handle(req) { exec('echo ' + req.payload, () => {}); }
module.exports = { handle };
