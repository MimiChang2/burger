//import ORM
var ORM = require("../config/orm.js");

// Create the code that will call the ORM functions using burger specific input for the ORM.
//taking user input and calling SQL queries based on the user input
// selectAll()
// insertOne()
// updateOne()

//callbacks need to match the object key defined in the orm.js file
var burger = {
    All: function(cb) {
        ORM.selectAll(function(response) {
            cb(response);
        });
    },
    Create: function(burger_name, cb) {
        ORM.insertOne(burger_name, function(response) {
            cb(response);
        });
    },
    Update: function(id, devoured) {
        ORM.updateOne(id, function(response) {
            cb(response);
        });
    }
};


// Export at the end of the burger.js file.
module.exports = burger;
