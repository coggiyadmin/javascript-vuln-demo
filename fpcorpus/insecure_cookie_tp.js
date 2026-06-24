// TP (CWE-614/1004) — cookie set without Secure/HttpOnly flags.
function setSession(res, sid) {
  res.cookie('SESSIONID', sid, { secure: false, httpOnly: false }); // SINK (CWE-614/1004)
}
module.exports = { setSession };
