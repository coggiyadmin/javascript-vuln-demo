// TN — benign calculator tool; pure, side-effect-free, bounded. Safe to grant freely.
function add2(a, b) { return a + b; }
function percentOf(v, p) { return (v * p) / 100; }
module.exports = { tools: [{ name: 'add', fn: add2 }, { name: 'percentOf', fn: percentOf }] };
