// TP (CWE-117) — log injection: untrusted input concatenated into a log line.
function onLogin(user) { console.log('login user=' + user); } // SINK (CWE-117)
module.exports = { onLogin };
