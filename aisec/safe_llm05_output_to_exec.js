// SAFE mirror (OWASP LLM05) — model output parsed as a number, never executed.
const OpenAI = require('openai');
const client = new OpenAI();
async function runGenerated(task) {
  const out = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'Return only the number for: ' + task }] })).choices[0].message.content.trim();
  const n = Number(out);
  if (Number.isNaN(n)) throw new Error('not a number');
  return n;
}
module.exports = { runGenerated };
