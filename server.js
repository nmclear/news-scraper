// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// MODELS
const db = require("./models");

// EXPRESS APP
const PORT = 3000;
const app = express();

// PARSE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC DIRECTORY
app.use(express.static("public"));

// HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// DATABASE SELECTION
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// ROUTES
require("./routes/scraper-routes.js")(app);




// SERVER START
app.listen(PORT, function() {
    console.log("App running on http://localhost:" + PORT);
});