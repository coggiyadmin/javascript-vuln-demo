// v10 allowlist-set
const Handlebars = require('handlebars');
const tmpl = Handlebars.compile('<p>{{n}}</p>');
function render(n) { return tmpl({ n }); }
module.exports = { render };
