const express = require('express'); const { MongoClient } = require('mongodb');
const app = express(); const db = new MongoClient('mongodb://localhost').db('app');
app.get('/agg', async (req, res) => {
  const stage = req.query.stage || '{}';
  await db.collection('users').aggregate([JSON.parse(stage)]).toArray(); // SINK CWE-943 aggregate stage
  res.end('ok');
});
