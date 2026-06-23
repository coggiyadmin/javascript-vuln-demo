// TN — benign read-only lookup; fixed in-memory catalog by exact key.
const CATALOG = { USD: 'US Dollar', EUR: 'Euro', JPY: 'Japanese Yen' };
function currencyName(code) { return CATALOG[String(code).toUpperCase()] || 'unknown'; }
module.exports = { currencyName };
