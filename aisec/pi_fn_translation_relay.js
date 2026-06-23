// Prompt Injection FN (OWASP LLM01) — multi-hop translation relay. Benign per single call;
// hop-2 consumes hop-1 output as an instruction. Single-turn scanners MISS it.
const OpenAI = require('openai');
const client = new OpenAI();
async function relay(userText) {
  const decoded = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: 'Translate to English.' }, { role: 'user', content: userText }] }))
    .choices[0].message.content;
  // SINK (LLM01 relay): hop-1 output injected as authoritative instruction
  return client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: 'Do exactly this:\n' + decoded }] });
}
module.exports = { relay };
