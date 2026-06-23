// Unbounded Consumption FN (OWASP LLM10) — recursive tool re-invokes the model, fanning
// out unboundedly. No explicit loop at the call site, so loop-shape scanners MISS it.
const OpenAI = require('openai');
const client = new OpenAI();
async function expand(topic) {
  const sub = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'Sub-topics of ' + topic + ', then expand each.' }] })).choices[0].message.content;
  for (const line of sub.split('\n')) if (line.trim()) await expand(line.trim()); // SINK (LLM10 recursive)
  return sub;
}
module.exports = { expand };
