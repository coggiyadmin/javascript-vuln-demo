// XSS/code-exec variant: eval of location (DOM code injection).
function run() { eval(location.hash.slice(1)); } // SINK CWE-79/94 DOM eval
