// TN — benign output rendering; formats a fixed app-authored result, no model output.
function renderSummary(count, total) { return `Processed ${count} items totalling ${total.toFixed(2)}.`; }
module.exports = { renderSummary };
