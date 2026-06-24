/**
 * SAFE mirror — prototype-pollution-safe merge / assignment (CWE-1321).
 * FP-target for js_research_fn.js (lodash.merge of user input) and server.js:48.
 * User-controlled keys are filtered, and dangerous keys (__proto__/constructor/
 * prototype) are rejected, so Object.prototype can never be polluted.
 */
const FORBIDDEN = new Set(['__proto__', 'constructor', 'prototype']);

function safeMerge(target, src) {
  for (const key of Object.keys(src)) {
    if (FORBIDDEN.has(key)) continue; // never copy a pollution key
    const val = src[key];
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      const next = target[key] && typeof target[key] === 'object' ? target[key] : Object.create(null);
      target[key] = safeMerge(next, val);
    } else {
      target[key] = val;
    }
  }
  return target;
}

function setSafe(obj, key, value) {
  if (FORBIDDEN.has(key)) throw new Error('forbidden key');
  if (!Object.prototype.hasOwnProperty.call(obj, key) && key in obj) {
    throw new Error('inherited key not assignable');
  }
  obj[key] = value;
  return obj;
}

module.exports = { safeMerge, setSafe };
