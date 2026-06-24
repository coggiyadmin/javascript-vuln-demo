// SQLi variant: MongoDB NoSQL — user object in aggregate $match (CWE-943).
const express = require('express'); const mongoose = require('mongoose'); const app = express();
app.get('/u', async (req, res) => {
  const filter = req.query.filter;
  const results = await mongoose.connection.db.collection('products').aggregate([{ $match: filter }]).toArray(); // SINK NoSQL
  res.json(results);
});
