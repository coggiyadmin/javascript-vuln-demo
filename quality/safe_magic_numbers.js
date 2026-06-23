// SAFE mirror — named constants.
const TAX_RATE = 0.0825;
const SHIPPING_FEE = 2.99;
const RETRY_MS = 750;

function priceWithTax(amount) { return amount * TAX_RATE + SHIPPING_FEE; }
function retryDelay(attempt) { return attempt * RETRY_MS; }
module.exports = { priceWithTax, retryDelay };
