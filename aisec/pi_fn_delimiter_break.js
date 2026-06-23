// Prompt Injection FN (OWASP LLM01) — delimiter/role-fence break. User content carries a
// forged </data> close + fake role header; trusting the app's own fencing MISSES it.
const OpenAI = require('openai');
const client = new OpenAI();
const SYSTEM = 'You are a translator. Translate the user text inside <data> tags.';
async function translate(userText) {
  const fenced = `<data>${userText}</data>`; // SINK (LLM01 delimiter break)
  return client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: fenced }] });
}
module.exports = { translate };
