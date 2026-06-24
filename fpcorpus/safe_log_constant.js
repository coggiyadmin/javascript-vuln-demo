// FP-target — logging a constant must not be flagged log injection.
function start() { console.log('service started'); } // constant — NOT a sink
module.exports = { start };
