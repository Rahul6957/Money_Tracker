const db = require('../config/dbconnection');

// ✅ ADD TRANSACTION
const addTransaction = (data, callback) => {
  const query = `
    INSERT INTO transactions (user_id, amount, type, category_id, note, date)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      data.user_id,
      data.amount,
      data.type,
      data.category_id,
      data.note,
      data.date
    ],
    callback
  );
};

// ✅ GET TRANSACTIONS
const getTransactions = (callback) => {
  const query = `SELECT * FROM transactions`;
  db.query(query, callback);
};

// ✅ UPDATE TRANSACTION
const updateTransaction = (id, data, callback) => {
  const query = `
    UPDATE transactions
    SET amount = ?, type = ?, category_id = ?, note = ?, date = ?
    WHERE id = ?
  `;

  db.query(
    query,
    [
      data.amount,
      data.type,
      data.category_id,
      data.note,
      data.date,
      id
    ],
    callback
  );
};

// ✅ EXPORT ALL
module.exports = {
  addTransaction,
  getTransactions,
  updateTransaction
};