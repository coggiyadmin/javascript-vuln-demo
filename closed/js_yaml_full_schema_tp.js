const yaml = require('js-yaml');
// cognium-dev#1068 — DEFAULT_FULL_SCHEMA still deserializes
function cfg(req) {
  return yaml.load(req.body, { schema: yaml.DEFAULT_FULL_SCHEMA });
}
module.exports = { cfg };
