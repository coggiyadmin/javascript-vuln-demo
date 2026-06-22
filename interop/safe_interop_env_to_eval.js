// IL-5 config-driven boundary — SAFE mirror of interop_env_to_eval.js.
// The config value is parsed as a number, never evaluated as code. ZERO findings.
function computeQuota() {
  const raw = process.env.QUOTA || '0'; // SOURCE (config value)
  // Safe: Number() parses as data — no eval, no code execution.
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

module.exports = { computeQuota };
