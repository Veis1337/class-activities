// Must require mySQL bc it is a package
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creating a connection with mySQL using the parameters expected with the createConnection method.
const db = mysql.createConnection(
  {
    // path of express server
    host: 'localhost',
    // user who is connecting
    user: 'root',
    // can put in password here if you don't want to enter it every time
    password: 'water1',
    // the database we are accessing
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// query to db to select all records from students
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
