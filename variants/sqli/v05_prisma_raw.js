'use strict';
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
app.get('/p', async (req, res) => {
  await prisma.$queryRawUnsafe('SELECT * FROM u WHERE id=' + req.query.id); // SINK CWE-89
});
module.exports = app;
