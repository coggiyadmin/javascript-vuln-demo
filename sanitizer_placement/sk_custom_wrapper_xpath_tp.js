"use strict";
const express = require("express");
const xpath = require("xpath");
const { DOMParser } = require("@xmldom/xmldom");
const app = express();
const doc = new DOMParser().parseFromString("<users/>", "text/xml");
const companySanitize = (v) => String(v || "").replace(/['"]/g, "");
app.get("/x", (req, res) => {
  const name = companySanitize(req.query.name);
  xpath.select("//user[name='" + name + "']", doc);
  res.end("ok");
});
module.exports = app;
