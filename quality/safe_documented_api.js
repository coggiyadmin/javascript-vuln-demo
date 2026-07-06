/** @param {Array<{price:number}>} items */
function computeTotal(items, taxRate, ship) {
  /** Return order total including tax and shipping. */
  const sub = items.reduce((s, i) => s + i.price, 0);
  return sub + sub * taxRate + ship;
}
/** @param {string[][]} rows */
function exportCsv(rows, delimiter) {
  /** Serialize rows to CSV. */
  return rows.map(r => r.join(',')).join(delimiter);
}
module.exports = { computeTotal, exportCsv };
