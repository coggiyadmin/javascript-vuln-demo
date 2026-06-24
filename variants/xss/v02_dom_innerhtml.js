// XSS variant: DOM-based, innerHTML sink, source = location.hash.
function render() { document.getElementById('o').innerHTML = location.hash.slice(1); } // SINK CWE-79 DOM
