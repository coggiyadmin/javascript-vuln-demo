// Provenance FN (OWASP LLM09) — mixed authorship: a small AI-generated block embedded in
// a human-authored module. File-level provenance classifiers MISS the localized span. MISS.
function settle(trades) { // human-authored domain logic
  return trades.reduce((net, [side, qty, price]) =>
    net + (side === 'buy' ? qty * price : -qty * price), 0);
}
function processData(data) { // localized AI-generated span (generic naming, boilerplate)
  const result = [];
  for (const item of data) { result.push(item); }
  return result;
}
module.exports = { settle, processData };
