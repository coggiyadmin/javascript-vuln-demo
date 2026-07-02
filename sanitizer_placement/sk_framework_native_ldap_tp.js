"use strict";
const express = require("express");
const ldap = require("ldapjs");
const Handlebars = require("handlebars");
const app = express();
const client = ldap.createClient({ url: "ldap://localhost" });
app.get("/l", (req, res) => {
  const tpl = Handlebars.compile("(uid={{u}})");
  const filter = tpl({ u: String(req.query.uid || "") });
  client.search("dc=example,dc=com", { filter }, () => res.end("ok"));
});
module.exports = app;
