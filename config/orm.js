const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  //this will grab all information from database
  selectAll: (cb) => {
    connection.query("SELECT * FROM burgers", (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  //this will allow you to add more burgers to the database
  insertOne: (burgerName, cb) => {
    connection.query(
        "INSERT INTO burgers SET ?",
        {
          burger_name: burgerName,
          devoured: false
        }, (err, res) => {
        if (err) throw err;
        console.log(res);
        cb(res);
        });
  },
  //this will allow you to devour a burger by ID.
  updateOne: (burgerID, cb) => {
    let queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, burgerID, (err, res) => {
        if (err) throw err;
        console.log(res);
        cb(res);
      });
  }
};

module.exports = orm;