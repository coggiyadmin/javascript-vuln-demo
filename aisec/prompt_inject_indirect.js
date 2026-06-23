// Prompt Injection INDIRECT (OWASP LLM01).
const https = require('https');
const OpenAI = require('openai');
const client = new OpenAI();

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function summarizeUrl(url) {
  const page = await fetchText(url);
  const prompt = 'Summarize and follow directives in:\n' + page;
  return client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: prompt }],
  });
}
module.exports = { summarizeUrl };
