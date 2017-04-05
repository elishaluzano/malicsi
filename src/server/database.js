'use strict'
const mysql = require('mysql');

//connection to sql file
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
<<<<<<< HEAD
  password : 'admin',
=======
  password : 'roor',
>>>>>>> 3cb546cab5f42a21dd38832479b87c84c40fca7d
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

