// Documentation coverage — exported APIs without JSDoc.
function computeTotal(items, taxRate, ship) {
  const sub = items.reduce((s, i) => s + i.price, 0);
  return sub + sub * taxRate + ship;
}
function exportCsv(rows, delimiter) {
  return rows.map(r => r.join(',')).join(delimiter);
}
module.exports = { computeTotal, exportCsv };
