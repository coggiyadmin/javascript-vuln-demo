// cognium-dev#1147 — escapeRegExp turns tainted text into a literal, so the
// RegExp constructor is not ReDoS from attacker-controlled structure.
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const name = process.argv[2];
const re = new RegExp('^' + escapeRegExp(name) + '$');
re.test(process.argv[3]);
