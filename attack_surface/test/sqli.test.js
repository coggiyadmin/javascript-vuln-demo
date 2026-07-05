test('query', () => { const q = process.env.Q || ''; db.query("SELECT * FROM u WHERE n='" + q + "'"); }); // SINK — test file
