const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'money_tracker'
});

db.connect((err) => {
  if (err) {
    console.log('DB Connection Failed:', err);
  } else {
    console.log('DB Connected');
  }
});

module.exports = db;