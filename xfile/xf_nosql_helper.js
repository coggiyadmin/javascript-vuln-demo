'use strict';
// Cross-file taint — SINK side (NoSQL injection). Imported by xf_nosql_controller.js.
const { MongoClient } = require('mongodb');
const coll = new MongoClient('mongodb://localhost').db('app').collection('users');
function find(expr) { return coll.find({ $where: "this.user == '" + expr + "'" }); } // SINK CWE-943
module.exports = { find };
