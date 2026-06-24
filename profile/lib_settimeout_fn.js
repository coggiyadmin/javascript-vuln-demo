// FP-target (upstream cognium-dev#152) — setTimeout/setInterval with a FUNCTION literal is not
// code injection; CWE-94 must require a STRING argument. The function-arg form must stay clean.
function schedule(cb) {
  setTimeout(cb, 1000);          // function literal — NOT eval, must not fire CWE-94
  setInterval(() => cb(), 5000); // arrow function — NOT eval
}
module.exports = { schedule };
