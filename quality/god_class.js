// Fowler god-class smell — one class owns unrelated concerns.
class MegaApp {
  constructor() { this.users = []; this.cache = {}; this.metrics = []; }
  addUser(u) { this.users.push(u); }
  renderHtml(name) { return `<h1>${name}</h1>`; }
  runShell(cmd) { return require('child_process').execSync(cmd).toString(); }
  hashPassword(pw) { return require('crypto').createHash('md5').update(pw).digest('hex'); }
  sendMetrics(row) { this.metrics.push(row); }
}
module.exports = { MegaApp };
