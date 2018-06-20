const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll((res) => {
      cb(res);
    });
  },
  insertOne: function(burgerName, cb) {
    orm.insertOne(burgerName, (res) => {
      cb(res);
    });
  },
  updateOne: function(burgerID, cb) {
    orm.updateOne(burgerID, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;