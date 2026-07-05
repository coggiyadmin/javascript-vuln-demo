test('render', () => { const q = process.env.Q || ''; const html = '<p>' + q + '</p>'; expect(html).toBeDefined(); }); // SINK — test file
