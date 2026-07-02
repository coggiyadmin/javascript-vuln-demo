// Benign — static href.
const express = require("express");
const app = express();
app.get("/link", (_req, res) => res.end('<a href="/home">home</a>'));
module.exports = app;
