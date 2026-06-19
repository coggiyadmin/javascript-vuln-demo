'use strict';
// CWE-260 — Password in Configuration File. Real credentials hardcoded in a config module.
// NO finding = FALSE NEGATIVE. (CWE-798 family.)
module.exports = {
  dbHost: 'db.internal',
  dbUser: 'app',
  dbPassword: 'Pr0d-DB-pass!2024',   // hardcoded credential → CWE-260
  smtpPassword: 'smtp-s3cret-key',    // hardcoded credential → CWE-260
};
