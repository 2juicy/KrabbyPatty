// Set up MySQL connection.
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_MAUVE_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}


// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;