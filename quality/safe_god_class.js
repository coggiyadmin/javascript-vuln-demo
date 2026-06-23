// SAFE mirror — responsibilities split.
class UserRepository {
  constructor() { this.users = []; }
  addUser(u) { this.users.push(u); }
}

class HtmlRenderer {
  renderTitle(name) { return `<h1>${name}</h1>`; }
}
module.exports = { UserRepository, HtmlRenderer };
