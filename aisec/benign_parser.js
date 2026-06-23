// TN — benign human-authored parser; trims and drops blank lines, no AI surface.
function parseLines(lines) { return lines.map(l => l.trim()).filter(Boolean); }
module.exports = { parseLines };
