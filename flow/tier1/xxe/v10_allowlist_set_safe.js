// v10 allowlist-set
const { XMLParser } = require('fast-xml-parser');
const parser = new XMLParser({ ignoreAttributes: false, processEntities: false });
function parse(raw) { return parser.parse(String(raw)); }
module.exports = { parse };
