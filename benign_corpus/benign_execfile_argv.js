'use strict';
const { execFile } = require('child_process');
function grep(pattern) { execFile('grep', [pattern, '/var/log/app.log'], () => {}); }
module.exports = { grep };
