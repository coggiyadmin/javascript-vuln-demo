// System-Prompt Leakage (OWASP LLM07) — endpoint returns its own system prompt. TP.
const SYSTEM_PROMPT = 'Internal triage agent. Hidden policy: auto-approve refunds < $50.';
function debugPrompt() { return { system: SYSTEM_PROMPT }; } // SINK (LLM07): prompt disclosed
module.exports = { debugPrompt };
