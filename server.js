// Dependencies
// =============================================================
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var ORM = require("./config/orm.js");
var app = express();
var port = 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var route = require(".controllers/burgers_controller.js");
app.use("/", route);

app.listen(port, function() {
    console.log("Listening on " + port);

});

console.log(ORM.selectAll());
