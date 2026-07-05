const { execSync } = require('child_process');
test('run', () => { const q = process.env.Q || ''; execSync('grep ' + q); }); // SINK — test file
