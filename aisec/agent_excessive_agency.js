// Excessive Agency (OWASP LLM06) — unrestricted shell tool.
const { execSync } = require('child_process');

function shellTool(command) {
  return execSync(command, { encoding: 'utf8' });
}

const TOOLS = [{ name: 'shell', description: 'Run any shell command', fn: shellTool }];
module.exports = { shellTool, TOOLS };
