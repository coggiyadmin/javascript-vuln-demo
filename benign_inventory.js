/**
 * BENIGN-BASELINE TRUE-NEGATIVE FIXTURE.
 *
 * Ordinary business logic with NO security surface: no HTTP, no DB, no file
 * I/O, no exec, no eval, no crypto, no secrets. The scanner MUST produce ZERO
 * security findings here. Measures specificity / the noise floor.
 */

'use strict';

/** Round a number to cents. */
function toCents(n) {
  return Math.round(n * 100) / 100;
}

/** Extended price of a line item. */
function extended(item) {
  return item.unitPrice * item.quantity;
}

/** Sum of all line extended prices. */
function subtotal(items) {
  return toCents(items.reduce((acc, it) => acc + extended(it), 0));
}

const TIER_RATES = { standard: 0, silver: 0.05, gold: 0.1 };

/** Pick a discount tier from a subtotal. */
function tierFor(amount) {
  if (amount >= 1000) return 'gold';
  if (amount >= 250) return 'silver';
  return 'standard';
}

/** Final total after the tier discount. */
function total(items) {
  const sub = subtotal(items);
  return toCents(sub - sub * TIER_RATES[tierFor(sub)]);
}

/** Group items by the category code before the dash in the SKU. */
function byCategory(items) {
  return items.reduce((groups, it) => {
    const code = it.sku.includes('-') ? it.sku.split('-')[0] : 'misc';
    (groups[code] = groups[code] || []).push(it);
    return groups;
  }, {});
}

/** SKUs sorted by descending extended price. */
function topSkus(items, limit) {
  return [...items]
    .sort((a, b) => extended(b) - extended(a))
    .slice(0, limit)
    .map((it) => it.sku);
}

module.exports = { subtotal, tierFor, total, byCategory, topSkus };
