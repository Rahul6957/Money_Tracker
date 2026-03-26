const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction.controller');  

console.log("Routes loaded ✅");

router.get('/', (req, res) => {
  console.log("GET /transactions HIT ✅");
  res.send("Transactions working");
});
router.put('/:id', transactionController.updateTransaction);
module.exports = router;

