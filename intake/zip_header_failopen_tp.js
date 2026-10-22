/**
 * TP — an invalid ZIP local header still returns caller-controlled bytes (CWE-20).
 * CVE-2026-106070 class: ZipFile returns a prefix after failed header validation.
 */
'use strict';

function readLocal(buf) {
  const sigOk = buf.length >= 4 && buf[0] === 0x50 && buf[1] === 0x4b && buf[2] === 0x03 && buf[3] === 0x04;
  if (!sigOk) return Buffer.from(buf.subarray(0, Math.min(buf.length, 16))); // SINK CWE-20
  return Buffer.alloc(0);
}

module.exports = { readLocal };
