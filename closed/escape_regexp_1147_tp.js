// cognium-dev#1147 — concatenating tainted text into RegExp is still ReDoS.
const name = process.argv[2];
const re = new RegExp('^' + name + '$');
re.test(process.argv[3]);
