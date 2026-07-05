function loadKey(secrets) { return secrets.privateKey; } // injected from secrets manager, no literal
module.exports = { loadKey };
