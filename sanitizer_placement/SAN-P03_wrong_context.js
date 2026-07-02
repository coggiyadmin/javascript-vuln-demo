"use strict";
/** SAN-P03 — sanitizer applied in wrong context (HTML encode before SQL). */
function lookup(db, user) {
  const safe = String(user).replace(/[<>&]/g, "");
  db.query("SELECT * FROM u WHERE n='" + safe + "'");
}
module.exports = { lookup };
