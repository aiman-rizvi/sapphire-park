var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
app.set('port', 7414);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// Routes
// Home
app.get("/", function(req, res){
    res.render("index");
});

// Nature/History page
app.get("/park-background", function(req, res){
    res.render("background");
});

// Events/Amenities page
app.get("/amenities-events", function(req, res){
    res.render("amenities");
});

// Visitor's Info page
app.get("/visit", function(req, res){
    res.render("visit");
});

// Start up server
app.listen(app.get('port'), function(){
    console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});