// wrong_context mirror — nosql
const express = require('express'); const { MongoClient } = require('mongodb');
const app = express(); const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req, res) => {
  const user = req.body.user;
  if (typeof user !== 'string') return res.status(400).end();
  db.collection('users').findOne({ user, active: true });
});
