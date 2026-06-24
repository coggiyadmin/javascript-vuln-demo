// XSS variant: event-handler attribute via setAttribute.
function render(el) { el.setAttribute('onclick', location.hash.slice(1)); } // SINK CWE-79 event
