'use strict';
// Cross-file taint — SINK side (XPath injection). Imported by xf_xpath_controller.js.
const xpath = require('xpath');
const { DOMParser } = require('xmldom');
const doc = new DOMParser().parseFromString('<users/>');
function find(name) { return xpath.select("//user[name='" + name + "']", doc); } // SINK CWE-643
module.exports = { find };
