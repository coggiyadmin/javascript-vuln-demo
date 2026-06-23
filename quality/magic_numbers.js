// Fowler magic numbers — unexplained numeric literals.
function priceWithTax(amount) { return amount * 1.0825 + 2.99; }
function retryDelay(attempt) { return attempt * 750; }
module.exports = { priceWithTax, retryDelay };
