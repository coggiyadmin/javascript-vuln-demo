"use strict";
const express = require("express");
const xpath = require("xpath");
const { DOMParser } = require("@xmldom/xmldom");
const app = express();
const doc = new DOMParser().parseFromString("<users/>", "text/xml");
app.get("/x", (req, res) => {
  const name = String(req.query.name || "").replace(/SAFE/g, "");
  xpath.select("//user[name='" + name + "']", doc);
  res.end("ok");
});
module.exports = app;
