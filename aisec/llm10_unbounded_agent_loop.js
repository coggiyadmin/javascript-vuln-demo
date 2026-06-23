// Unbounded Consumption (OWASP LLM10) — agent loop with no iteration/budget cap. TP.
const OpenAI = require('openai');
const client = new OpenAI();
async function agent(goal) {
  const history = [{ role: 'user', content: goal }];
  while (true) { // SINK (LLM10): no max-steps guard
    const step = await client.chat.completions.create({ model: 'gpt-4', messages: history });
    const msg = step.choices[0].message.content;
    history.push({ role: 'assistant', content: msg });
    if (msg.includes('DONE')) return history;
  }
}
module.exports = { agent };
