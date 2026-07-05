const fs = require('fs');
test('read', () => { const q = process.env.Q || ''; fs.readFileSync('/data/' + q); }); // SINK — test file
