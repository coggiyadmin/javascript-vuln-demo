// XSS variant: DOM-based, insertAdjacentHTML sink.
function render(el) { el.insertAdjacentHTML('beforeend', location.hash); } // SINK CWE-79 DOM
