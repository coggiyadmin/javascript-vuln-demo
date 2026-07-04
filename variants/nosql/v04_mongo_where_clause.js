const express = require('express'); const { MongoClient } = require('mongodb');
const app = express();
app.get('/m', async (req, res) => {
  const db = (await MongoClient.connect('mongodb://localhost')).db('app');
  await db.collection('u').find({ $where: 'this.name == "' + req.query.name + '"' }).toArray(); // SINK CWE-943
  res.end('ok');
});
