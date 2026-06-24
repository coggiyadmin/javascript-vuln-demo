// FP-target (upstream cognium-dev#162, #140) — CLI profile. Dev tool that require()s a module
// named on argv. Operator-controlled; project-profile=cli should downgrade.
const mod = require(process.argv[2]); // dev-CLI dynamic require
console.log(mod);
