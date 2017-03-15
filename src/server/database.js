'use strict'
const mysql = require('mysql');

//connection to sql file
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'tezuka',
  db : 'malicsi'
});

//check database connection 
connection.connect((err) => {
    if (!err) {
        console.log("The database is connected!");
    } else {
        console.log("There is an error in database connection!");
        console.log(err); 
    }
});

connection.query('use malicsi');
module.exports = connection;
