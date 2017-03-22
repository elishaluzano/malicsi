'use strict'
const mysql = require('mysql');

//connection to sql file
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
<<<<<<< HEAD
  password : 'useruser',
=======
  password : 'tezuka',
>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16
  db : 'malicsi'
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

