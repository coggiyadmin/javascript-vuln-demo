const express = require('express'); const { PrismaClient } = require('@prisma/client');
const app = express(); const prisma = new PrismaClient();
app.get('/q', async (req, res) => {
  await prisma.$queryRawUnsafe('SELECT * FROM users WHERE name = ' + req.query.name); // SINK CWE-943 prisma raw
  res.end('ok');
});
