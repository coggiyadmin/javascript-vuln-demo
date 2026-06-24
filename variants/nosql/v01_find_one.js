const express = require('express'); const { MongoClient } = require('mongodb');
const app = express(); const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req, res) => {
  db.collection('users').findOne({ user: req.body.user, active: true }); // SINK CWE-943
});
