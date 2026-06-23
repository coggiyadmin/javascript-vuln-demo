// TN — benign similarity over a fixed single-owner list; no tenancy, no ingestion.
const DOCS = [['greeting', [1, 0]], ['farewell', [0, 1]]];
function nearest(vec) { return DOCS.reduce((b, d) => (dot(d[1], vec) > dot(b[1], vec) ? d : b))[0]; }
function dot(a, b) { return a.reduce((s, x, i) => s + x * b[i], 0); }
module.exports = { nearest };
