var connection = require("./connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
    selectAll: function() {
        var query = "SELECT * FROM burgers";
        connection.query(query, function(error, result) {
            if (error) {
                throw error;
            }
            cb(result);
            console.log(result);
        });
    },
    insertOne: function(burger_name) {
        var query = "INSERT INTO burger(burger_name) VALUES (?)";
        connection.query(query, burger_name, function(error, result) {
            if (error) {
                throw error;
            }
            cb(result);
            console.log(result);

        });
    },
    updateOne: function(id, devoured) {
        var query = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(query, id, function(error, result) {
            if (error) {
                throw error;
            }
            cb(result);
            console.log(result);

        });
    }
};

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.
module.exports = orm;
