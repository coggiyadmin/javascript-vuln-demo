function setSid(res, sid) {
  res.cookie('SESSIONID', sid, { secure: false, httpOnly: true })  // SINK CWE-614
}
module.exports = { setSid };
