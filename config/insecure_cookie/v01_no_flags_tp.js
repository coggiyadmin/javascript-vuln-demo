function setSession(res, sid) {
  res.cookie('SESSIONID', sid, { secure: false, httpOnly: false }); // SINK CWE-614
}
module.exports = { setSession };
