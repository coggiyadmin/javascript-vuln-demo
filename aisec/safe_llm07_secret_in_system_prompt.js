// SAFE mirror (OWASP LLM07) — no secret in the prompt; key stays server-side for tools.
const OpenAI = require('openai');
const client = new OpenAI();
const KEY = process.env.BILLING_API_KEY || '';
function buildAgent() {
  const system = 'You are billing-bot. Use the authorized billing tool for balances.';
  return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'system', content: system }] });
}
module.exports = { buildAgent };
