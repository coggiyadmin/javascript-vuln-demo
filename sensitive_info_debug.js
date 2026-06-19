/**
 * FN probe — CWE-215 Insertion of Sensitive Information Into Debugging Code. A debug branch
 * returns the stack trace and DB credentials to the client. NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();
const DEBUG = process.env.DEBUG === '1';

app.get('/op', (req, res) => {
  try {
    throw new Error('boom');
  } catch (e) {
    if (DEBUG) {
      // leaks stack + secrets through a debug path → CWE-215
      return res.status(500).send(e.stack + '\nDB_PASSWORD=' + process.env.DB_PASSWORD);
    }
    res.status(500).send('error');
  }
});
