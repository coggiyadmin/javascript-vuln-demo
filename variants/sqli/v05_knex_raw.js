// SQLi variant: knex.raw with user-controlled fragment.
const express = require('express'); const knex = require('knex')({ client: 'pg', connection: 'postgres://localhost/app' });
const app = express();
app.get('/u', async (req, res) => {
  const rows = await knex.raw('SELECT * FROM items WHERE sku = ' + req.query.sku); // SINK CWE-89 knex
  res.json(rows.rows);
});
