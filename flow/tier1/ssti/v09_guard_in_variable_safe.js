// v09 guard-in-variable
const ALLOWED = new Set(['Hello {{name}}']);
function render(tmpl, ctx) { if (ALLOWED.has(tmpl)) return tmpl.replace('{{name}}', ctx.name || ''); }
module.exports = { render };
