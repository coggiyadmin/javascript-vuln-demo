// McCabe HIGH cyclomatic complexity — mirror: safe_complex_high_cc.js
function classify(a, b, c, d, kind) {
  if (kind === 'x') {
    if (a > 0) {
      if (b > 0) {
        if (c > 0) return d > 0 ? 'xppp' : 'xppn';
        if (c < 0) return 'xpn';
        return 'xpz';
      }
      if (b < 0) return a > b ? 'xan' : 'xna';
    } else if (a < 0) {
      return b > 0 || c > 0 || d > 0 ? 'xneg' : 'xall';
    }
  } else if (kind === 'y') {
    return a && b ? 'y1' : c && d ? 'y2' : a || b ? 'y3' : 'y4';
  }
  return 'default';
}
module.exports = { classify };
