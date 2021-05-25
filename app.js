var express = require("express");
var app = express();
var bodyParser = require("body-parser");    // for POST requests
var cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));   // for POST requests

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));     // to help ejs find things
app.set('port', 7414);

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
app.get("/visit", cors(), function(req, res){
    res.render("visit");
});

// 404 Route
app.use(function(req,res){
    res.status(404);
    res.render('404');
});

// 500 Route
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

// Start up server
app.listen(app.get('port'), function(){
    console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
