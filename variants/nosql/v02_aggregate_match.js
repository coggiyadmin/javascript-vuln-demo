const express = require('express'); const { MongoClient } = require('mongodb');
const app = express(); const db = new MongoClient('mongodb://localhost').db('app');
app.get('/a', (req, res) => {
  const filter = JSON.parse(req.query.filter);
  db.collection('u').aggregate([{ $match: filter }]).toArray(); // SINK CWE-943
});
