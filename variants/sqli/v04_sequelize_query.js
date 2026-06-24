// SQLi variant: Sequelize raw query with interpolation.
const express = require('express'); const { Sequelize } = require('sequelize'); const app = express();
const sequelize = new Sequelize('sqlite::memory:');
app.get('/u', async (req, res) => {
  const rows = await sequelize.query(`SELECT * FROM users WHERE role='${req.query.role}'`); // SINK CWE-89
  res.json(rows);
});
