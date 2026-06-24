// XSS variant: DOM-based, document.write sink, source = location.search.
function render() { document.write(location.search); } // SINK CWE-79 DOM
