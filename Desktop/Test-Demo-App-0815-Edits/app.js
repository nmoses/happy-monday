var express = require("express");
var app = express();
var ejs = require("ejs");
var bodyParser = require("body-parser");
//Set Up MongoDB
//Austin's Comment

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("Page is working");
});

app.listen(3000, function(req, res){
    console.log("server has started");
});