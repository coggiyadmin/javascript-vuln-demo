'use strict';
// TN — Redis protocol command, not OS exec. cognium-dev #170.
const Redis = require('ioredis');

function ping(client) {
  return client.call('PING');
}
module.exports = { ping };
