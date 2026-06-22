// Framework-idiom benign (WS-5.2) — Sequelize/TypeORM lookups that LOOK like DB
// access but parameterize automatically. ZERO findings expected.
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', { name: DataTypes.STRING });

app.get('/u', (req, res) => {
  const name = req.query.name;
  // Sequelize binds `where` values — no string concatenation into SQL.
  User.findOne({ where: { name } }).then((u) => res.json(u));
});
module.exports = app;
