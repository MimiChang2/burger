// Inside the burger_controller.js file, import the following:
// Express
// burger.js
var express = require("express");
var Burger = require("../models/burger.js");

// Create the router for the app 
var router = express.Router();

//Create routes
router.get("/", function(request, response) {
    Burger.selectAll(function(data) {
        var newBurger = {
            burgerdata: data
        };
        console.log(newBurger);
        response.render("index", newBurger);
    });
});

router.post("/api/burgers", function(request, response) {
    Burger.insertOne(["burger_name"], [request.body.burger_name],
        function(result) {
            response.json({ id: result.id });
        });

});

router.put("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    console.log("Condition: ", conditon);

    Burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.devoured === 1) {

        }

    });

});

//export the router at the end of your file.
module.exports = router;
