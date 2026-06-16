'use strict';
const { exec } = require('child_process');
function run(arg) { exec('echo ' + arg); } // SINK CWE-78
module.exports = { run };
