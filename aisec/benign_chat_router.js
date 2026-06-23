// TN — benign chat router; routes by an internal enum, no untrusted text reaches a prompt.
const HANDLERS = { billing: () => 'Routing to billing.', support: () => 'Routing to support.' };
function route(intent) { return (HANDLERS[intent] || (() => 'unknown'))(); }
module.exports = { route };
