function setSid(res, sid) {
  res.cookie('SESSIONID', sid, { secure: true, httpOnly: false })  // SINK CWE-614
}
module.exports = { setSid };
