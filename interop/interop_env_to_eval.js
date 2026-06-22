// IL-5 config-driven boundary — Node env/config value → eval (CWE-94).
// A value from process.env / config drives a dangerous code path: it is passed to
// eval(), turning config data into executed code. Expected today: FN (env as a
// taint source not modeled).
function computeQuota() {
  // SOURCE: config value from the environment (untrusted .env / CI var).
  const formula = process.env.QUOTA_FORMULA || '0';
  // SINK (CWE-94): config-supplied string evaluated as JS code.
  return eval(formula);
}

module.exports = { computeQuota };
