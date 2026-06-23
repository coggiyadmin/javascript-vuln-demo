// Unbounded Consumption (OWASP LLM10) — no token cap on a user-driven completion. TP.
const OpenAI = require('openai');
const client = new OpenAI();
function summarize(userText) {
  return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'user', content: userText }] }); // SINK
}
module.exports = { summarize };
