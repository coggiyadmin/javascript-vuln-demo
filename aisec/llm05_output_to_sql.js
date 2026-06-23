// Improper Output Handling (OWASP LLM05) — model output concatenated into SQL. TP.
const db = require('./db');
const OpenAI = require('openai');
const client = new OpenAI();
async function search(nl) {
  const clause = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'WHERE clause for: ' + nl }] })).choices[0].message.content;
  return db.query('SELECT * FROM items WHERE ' + clause); // SINK (LLM05 -> SQLi)
}
module.exports = { search };
