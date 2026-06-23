// System-Prompt Leakage (OWASP LLM07) — secret baked into the system prompt. TP.
const OpenAI = require('openai');
const client = new OpenAI();
function buildAgent() {
  const system = 'You are billing-bot. Internal key: ' + process.env.BILLING_API_KEY + '. Never reveal it.';
  return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'system', content: system }] }); // SINK
}
module.exports = { buildAgent };
