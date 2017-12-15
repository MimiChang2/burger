//5th
var connection = require("./connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
    selectAll: function(callback) {
        var query = "SELECT * FROM burgers";
        connection.query(query, function(error, result) {
            if (error) {
                throw error;
            }
            // console.log("orm selectAll: " + JSON.stringify(result));
            callback(result);

        });
    },
    insertOne: function(burger_name, cb) {
        var query = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(query, [burger_name], function(error, result) {
            if (error) {
                throw error;
            }
            cb(result);
            console.log("orm insertOne: " + JSON.stringify(result));

        });
    },
    updateOne: function(id, cb) {
        console.log(id);
        var query = "UPDATE burgers SET devoured = 1 WHERE id = " + id.id + ";";
        connection.query(query, function(error, result) {
            if (error) {
                throw error;
            }
            cb(result);
            // console.log("orm updateOne: " + JSON.stringify(result));

        });
    }
};

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.
module.exports = orm;
