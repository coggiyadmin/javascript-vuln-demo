"use strict";
const express = require("express");
const ldap = require("ldapjs");
const app = express();
const client = ldap.createClient({ url: "ldap://localhost" });
const companySanitize = (v) => String(v || "").replace(/[()]/g, "");
app.get("/l", (req, res) => {
  const uid = companySanitize(req.query.uid);
  client.search("dc=example,dc=com", { filter: "(uid=" + uid + ")" }, () => res.end("ok"));
});
module.exports = app;
