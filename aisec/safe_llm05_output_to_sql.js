// SAFE mirror (OWASP LLM05) — model selects a field; each branch runs a constant
// parameterized query with the value bound. Model output never becomes SQL.
const db = require('./db');
const OpenAI = require('openai');
const client = new OpenAI();
async function search(nl, value) {
  const field = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'Field for: ' + nl }] })).choices[0].message.content.trim();
  if (field === 'name') return db.query('SELECT * FROM items WHERE name = ?', [value]);
  if (field === 'sku') return db.query('SELECT * FROM items WHERE sku = ?', [value]);
  throw new Error('field not allowed');
}
module.exports = { search };
