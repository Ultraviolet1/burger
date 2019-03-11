var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// routes
router.get("/", function (req, res) {
  burger.selectAll(function (res) {
    var getBurger = {
      burgers: data
    };

    console.log(getBurger);
    res.render("index", getBurger);

  });
});

router.post("/", function (req, res) {
  burger.insertOne(["burger_name", "eaten"],
    [req.body.burger_name, req.body.eaten], function (result) {

      res.json({
        id: result.insertId, burger_name: result.insert
      });

    });

  router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
      eaten: req.body.eaten
    }, condition, function () {
      res.redirect("/");
    });
  });

  router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function () {
      res.redirect("/");
    });
  });
}),


  module.exports = router;