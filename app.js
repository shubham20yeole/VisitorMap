var express = require('express');
var SparkPost = require('sparkpost');
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs')
var mongodb = require('mongodb')
var collections = ["users", "blog", "comments", "property", "images", "notification", "bookmark", "messages","timetable", "timetablecategory", "timetablequestion", "resume", "skills", "locations"]
var db = mongojs('mongodb://shubham20.yeole:shubham20.yeole@ds163387.mlab.com:63387/paceteam3', collections);
// var db = mongojs('mongodb://*********:*********@*********.mlab.com:*********/*********', collections)

var app = express();
var ObjectId = mongojs.ObjectId;
var passport = require("passport")
// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)));
// body parser middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)));
// This method is ADMIN SIDE METHOD
app.get('/', function(req, res){  
var pageno = Number(0);  
  db.locations.find(function (err, locs) {
      res.render("visitormap.ejs",{locs: locs});
  })
});
app.post('/searchLocation', function(req, res) {
  var id = req.body.id;
  var ObjectID = require('mongodb').ObjectID;
  var o_id = new ObjectID(id);
   db.locations.findOne({ '_id': o_id}, function (err, location) {
    res.send(location);
  });
});

app.get('/url', function(req, res){       
  res.render("linkedinUrlGenerator.ejs");
});

app.get('/testingpage', function(req, res){       
  res.render("googled56e6f3d9a709b16.html");
});

app.listen(port, function() {
  console.log('Listening on port ' + port)
})


