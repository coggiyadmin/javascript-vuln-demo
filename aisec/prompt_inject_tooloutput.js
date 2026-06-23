// Prompt Injection TOOL-OUTPUT (OWASP LLM01) — tool result spliced into the system role.
const OpenAI = require('openai');
const client = new OpenAI();
async function runWithTool(userQ, toolResult) {
  // SINK (LLM01 tool-output): attacker-influenceable tool text given instruction authority.
  const system = 'You are an assistant. Tool said:\n' + toolResult + '\nNow act on it.';
  return client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: system }, { role: 'user', content: userQ }] });
}
module.exports = { runWithTool };
