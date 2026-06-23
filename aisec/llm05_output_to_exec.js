// Improper Output Handling (OWASP LLM05) — model output executed via eval(). TP.
const OpenAI = require('openai');
const client = new OpenAI();
async function runGenerated(task) {
  const code = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'JS expression for: ' + task }] })).choices[0].message.content;
  return eval(code); // SINK (LLM05): model output executed
}
module.exports = { runGenerated };
