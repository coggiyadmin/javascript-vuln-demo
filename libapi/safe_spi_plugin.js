// FP-target (upstream cognium-dev#165, js) — plugin discovery require()s module names declared in
// the app's own trusted package manifest, not from user input. Not reflection/code injection.
const manifest = require('./plugins.json'); // trusted, app-shipped manifest
function loadPlugins() {
  return manifest.plugins.map((name) => require(name)); // names from trusted manifest, not user input
}
module.exports = { loadPlugins };
