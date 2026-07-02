function setSid(res, sid) {
  res.cookie('SESSIONID', sid, { secure: true, httpOnly: true, sameSite: 'lax' })
}
module.exports = { setSid };
