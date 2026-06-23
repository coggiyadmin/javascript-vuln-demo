// TN — benign single bounded model call; capped tokens, one shot, no loop.
const OpenAI = require('openai');
const client = new OpenAI();
function answer(q) { return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'user', content: q }], max_tokens: 256 }); }
module.exports = { answer };
