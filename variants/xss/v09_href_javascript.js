// XSS variant: javascript: URI sink on href.
function render(el) { el.href = 'javascript:' + location.hash.slice(1); } // SINK CWE-79 uri
