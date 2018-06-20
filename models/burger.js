const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: function(burgerName, cb) {
    orm.insertOne("burgers", burgerName, (res) => {
      cb(res);
    });
  },
  updateOne: function(burgerID, cb) {
    orm.updateOne("burgers", burgerID, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;