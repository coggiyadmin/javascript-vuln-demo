// TP (CWE-94) — setTimeout with a STRING argument IS eval-like code injection.
function schedule(userCode) {
  setTimeout(userCode, 1000); // SINK (CWE-94): string arg is eval'd
}
module.exports = { schedule };
