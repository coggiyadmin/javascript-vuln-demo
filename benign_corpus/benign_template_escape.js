'use strict';
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function render(name) { return '<p>' + esc(name) + '</p>'; }
module.exports = { render };
