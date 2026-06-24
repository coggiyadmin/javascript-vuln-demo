// FP-target (upstream cognium-dev#170, js, CRITICAL) — sendCommand issues a RESP *protocol* verb
// (GET/SET), never an OS command. Must not be flagged command_injection (CWE-78).
function cacheGet(client, key) {
  return client.sendCommand(['GET', key]); // protocol verb, NOT OS exec
}
module.exports = { cacheGet };
