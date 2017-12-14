//3rd 
// Inside the burger_controller.js file, import the following:
// Express
// burger.js
var express = require("express");
var Burger = require("../models/burger.js");

// Create the router for the app 
var router = express.Router();

//Create routes
router.get("/", function(request, response) {
    Burger.All(function(data) {
        var newBurger = {
            burgerdata: data
        };
        console.log(newBurger);
        response.render("index", newBurger);
    });
});

router.post("/api/burgers", function(request, response) {
    Burger.Create(request.body.burger_name,
        function(result) {
            response.json({ id: result.id });
            console.log(result);
        });

});

// router.put("/api/burgers/:id", function(request, response) {
//     var condition = "id = " + request.params.id;
//     console.log("Condition: ", condition);

//     Burger.Update({
//         devoured: req.body.devoured
//     }, condition, function(result) {
//         if (result.devoured === true) {


//         }

//     });

// });

//export the router at the end of your file.
module.exports = router;
