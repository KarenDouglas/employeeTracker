require('dotenv').config()
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER ,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    },
    console.log(`Connected to the staff_db database.`)
  );
  
 module.exports = db