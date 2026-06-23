// Prompt Injection DIRECT (OWASP LLM01).
const OpenAI = require('openai');
const client = new OpenAI();

function answer(userQuestion) {
  const system = 'You are a support bot. Follow company policy.\n' + userQuestion;
  return client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: system }],
  });
}
module.exports = { answer };
