'use strict'
const mysql = require('mysql');

//connection to sql file
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'useruser',
  db : 'malicsi',
  dateStrings: true,
  timezone: '+08:00'
});

//check database connection
connection.connect((err) => {
    if (!err) {
        console.log("The database is connected!");
    } else {
        console.log("There is an error in database connection!");
    }
});
connection.query('USE malicsi');
module.exports = connection;

