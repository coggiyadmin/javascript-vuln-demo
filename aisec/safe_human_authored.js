// SAFE mirror — idiomatic, purposeful naming and structure.
function sumPositive(values) {
  return values.filter((v) => v > 0).reduce((acc, v) => acc + v, 0);
}

function formatInvoiceLine(sku, qty, unitPrice) {
  return `${sku}	${qty}	${(qty * unitPrice).toFixed(2)}`;
}
module.exports = { sumPositive, formatInvoiceLine };
