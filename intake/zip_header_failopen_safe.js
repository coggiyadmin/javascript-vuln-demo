/**
 * Safe mirror — invalid header fails closed.
 */
'use strict';

function readLocal(buf) {
  const sigOk = buf.length >= 4 && buf[0] === 0x50 && buf[1] === 0x4b && buf[2] === 0x03 && buf[3] === 0x04;
  if (!sigOk) throw new Error('invalid zip header');
  return Buffer.alloc(0);
}

module.exports = { readLocal };
