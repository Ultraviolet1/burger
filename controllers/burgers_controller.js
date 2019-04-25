var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// routes
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });

router.post("api/burgers", function (req, res) {
  burger.insertOne(["burger_name", "eaten"],
    [req.body.burger_name, req.body.eaten], function (result) {

      res.json({
        id: result.insertId, burger_name: result.insert
      });

    });
  });

  router.put("api/burgers", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);


  });

  burger.update(
    {
      eaten: req.body.eaten
    },
    
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

  router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function () {
      res.redirect("/");
    });
  });




  module.exports = router;