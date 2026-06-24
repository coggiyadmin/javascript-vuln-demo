// XSS variant: jQuery .html() sink, source = URL param.
const $ = require('jquery');
function render() { $('#o').html(new URLSearchParams(location.search).get('q')); } // SINK CWE-79
