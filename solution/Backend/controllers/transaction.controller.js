const Transaction = require('../models/transaction.model');

const addTransaction = (req, res) => {
  const data = req.body;

  if (!data.amount || !data.type) {
    return res.status(400).json({
      error: 'Amount and type are required'
    });
  }

  Transaction.addTransaction(data, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: 'Database error'
      });
    }

    res.status(201).json({
      message: 'Transaction added successfully'
    });
  });
};








const getTransactions = (req, res) => {
  Transaction.getTransactions((err, result) => {
    if (err) {
      return res.status(500).json({
        error: 'Database error'
      });
    }

    res.status(200).json(result);
  });
};
const updateTransaction = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  Transaction.updateTransaction(id, data, (err, result) => {
 if (err) {
  console.log(err);  // ✅ ADD THIS LINE
  return res.status(500).json({
    error: err.message
  });
}

    res.status(200).json({
      message: 'Transaction updated successfully'
    });
  });
};


module.exports = { addTransaction, getTransactions, updateTransaction };
