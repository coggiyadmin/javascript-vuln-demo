// SAFE mirror — table-driven low CC helpers.
function sign(n) { return n > 0 ? 'p' : n < 0 ? 'n' : 'z'; }

function classify(a, b, c, d, kind) {
  const handlers = { x: classifyX, y: classifyY };
  const fn = handlers[kind];
  return fn ? fn(a, b, c, d) : 'default';
}

function classifyX(a, b, c, d) { return 'x' + sign(a) + sign(b) + sign(c); }
function classifyY(a, b, c, d) { return a && b ? 'y_ok' : 'y_alt'; }
module.exports = { classify };
