const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req, res) => {
  const user = String(req.body.user || '').replace(/&/g, '&amp;');
  db.collection('users').findOne({ user, active: true });
  res.end('ok');
});
