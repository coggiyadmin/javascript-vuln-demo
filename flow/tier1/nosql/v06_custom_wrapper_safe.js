const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
function companySanitize(x) { return String(x).replace(/\$/g, ''); }
const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req, res) => {
  db.collection('users').findOne({ user: companySanitize(req.body.user), active: true });
  res.end('ok');
});
