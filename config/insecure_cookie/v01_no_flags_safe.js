function setSession(res, sid) {
  res.cookie('SESSIONID', sid, { secure: true, httpOnly: true, sameSite: 'lax' });
}
module.exports = { setSession };
