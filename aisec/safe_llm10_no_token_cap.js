// SAFE mirror (OWASP LLM10) — input length capped and max_tokens bounded.
const OpenAI = require('openai');
const client = new OpenAI();
const MAX_INPUT = 8000;
function summarize(userText) {
  if (userText.length > MAX_INPUT) throw new Error('input too large');
  return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'user', content: userText }], max_tokens: 512 });
}
module.exports = { summarize };
