const express = require("express");
const app = express();
app.get("/match", (req, res) => {
  const pattern = String(req.query.p || ".*"); // SOURCE
  res.end(String(new RegExp(pattern).test(String(req.query.t || "")))); // SINK
});
module.exports = app;
