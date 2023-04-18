// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'wildhacks.c5jkc6kgjvet.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'BluZip60*',
  database: 'TreeDB'
});

app.get('/CountryData', (req, res) => {
  connection.connect(function(err) {
      connection.query(`SELECT * FROM TreeDB.CountryData`, function(err, result, fields) {
          if (err) res.send(err);
          if (result) res.send(result);
      });
  });
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//end mysql connection
//connection.end();