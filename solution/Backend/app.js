const express = require('express');
const app = express();

const transactionRoutes = require('./routes/transaction.routes');

app.use(express.json());

// ✅ THIS LINE IS REQUIRED
app.use('/transactions', transactionRoutes);

module.exports = app;