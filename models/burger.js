//4th
//import ORM
var ORM = require("../config/orm.js");

// Create the code that will call the ORM functions using burger specific input for the ORM.
//taking user input and calling SQL queries based on the user input
// selectAll()
// insertOne()
// updateOne()

//callbacks need to match the object key defined in the orm.js file
var burger = {};
burger.All = function(cb) {
    console.log(cb);
    ORM.selectAll(function(response) {
        console.log("All");
        console.log(response);
        cb(response);

    });
};
burger.Create = function(burger_name, cb) {
    ORM.insertOne(burger_name, function(response) {
        cb(response);
    });
};
burger.Update = function(id, devoured, cb) {
    ORM.updateOne(id, function(response) {
        cb(response);
    });
};

// Export at the end of the burger.js file.
module.exports = burger;
