const { exec } = require('child_process');
function handler(event) { exec('grep ' + (event.q || ''), () => {}); }
module.exports = { handler };
