function setSid(res, sid) {
  res.cookie('SESSIONID', sid, { secure: true, httpOnly: true })  // SINK CWE-614
}
module.exports = { setSid };
