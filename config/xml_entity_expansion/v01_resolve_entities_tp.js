const libxml = require('libxmljs');
function parse(buf) { return libxml.parseXml(buf, { noent: true }); } // SINK CWE-776
module.exports = { parse };
