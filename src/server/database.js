'use strict'
const mysql = require('mysql');

//connection to sql file
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
<<<<<<< HEAD
  password: 'admin',
=======
  password : 'justletmein',
>>>>>>> fe5250e725efd08a979bc8ff781bca0207e1b22d
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

