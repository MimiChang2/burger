//2nd 
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "g92nyuy75d0gtem1",
        password: "q8zywi6fi2mxoyr2",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
