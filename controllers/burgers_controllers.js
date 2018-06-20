const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject.burgers[0].burger_name);
    res.render("index", hbsObject);
  });
});

module.exports = router;