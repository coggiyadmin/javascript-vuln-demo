// SQLi variant: Prisma $queryRawUnsafe with tainted SQL string.
const express = require('express'); const { PrismaClient } = require('@prisma/client'); const app = express();
const prisma = new PrismaClient();
app.get('/u', async (req, res) => {
  const rows = await prisma.$queryRawUnsafe('SELECT * FROM users WHERE id = ' + req.query.id); // SINK CWE-89
  res.json(rows);
});
