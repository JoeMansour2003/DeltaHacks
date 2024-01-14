const mysql = require('mysql2')
const db = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "",
database:"farm_2_table" 
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = db;