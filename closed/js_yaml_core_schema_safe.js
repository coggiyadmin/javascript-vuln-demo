const yaml = require('js-yaml');
// cognium-dev#1068 — CORE_SCHEMA builds no code, so load is not deserialization
function cfg(req) {
  return yaml.load(req.body, { schema: yaml.CORE_SCHEMA });
}
module.exports = { cfg };
