**Welcome to SHUBHAM RESUME FILTER project.**

***THIS PROJECT IS AVAILABLE AT: https://visitersmap.herokuapp.com***

**This project highlights people on google map who has previously visited my other projects or websites as follows**

http://shubham-great-livings.herokuapp.com

https://java-nodejs-blog.herokuapp.com

http://resumeselector.herokuapp.com

http://shubham-great-livings.herokuapp.com/timetable

https://shubhamtwilio.herokuapp.com

1. create a folder for your app.
2. open node cmd and go to that folder.
3. run command 'npm init'
4. add discription
5. edit entry point as app.js
6. author name
7. open package.json file and add dependencies as
"dependencies":{
  "express":"*",
  "body-parser":"*"
  },
8. create app.js file
9. write console.log("Hello world");
10. run app as node app.js and test it for further implementation

**11. Further define framework and other vital variables.**
>>
```nodejs
var express = require('express');
var SparkPost = require('sparkpost');
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs')
var mongodb = require('mongodb')
```

**12 Database connection and client session variables**
>>
```nodejs
var collections = ["users", "blog", "comments", "property", "images", "notification", "bookmark", "messages","timetable", "timetablecategory", "timetablequestion", "resume", "skills"]
var db = mongojs('mongodb://***********.***********:***********.***********@***********.mlab.com:***********/***********', collections)
var app = express();
var ObjectId = mongojs.ObjectId;
var passport = require("passport")
var blog=db.collection('blog');
var session = require('client-sessions');
```

**13 Set view engine and define folders where images, css and javascript files are stored.**
>> Increase the form post method capacity as per your requirement. I increased to 50MB
```nodejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)));
// body parser middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)));
```

**14. Define DATABASE CONNECTION**
>>
```nodejs
var collections = ["users", "blog", "comments", "property", "images", "notification", "bookmark", "messages","timetable", "timetablecategory", "timetablequestion", "resume", "skills", "locations"];
var db = mongojs('mongodb://********:**************@******.mlab.com:*******/********', collections);
```

**15. Following method sends all users to the frontend who have previously visited my other websites**
>>
```nodejs
app.get('/', function(req, res){  
var pageno = Number(0);  
  db.locations.find(function (err, locs) {
      res.render("visitormap.ejs",{locs: locs});
  })
});
```

**16. Following method is invoked when admin hover over the marker on google map through jQuery (This method returns a object based of id of its own)**
>>
```nodejs
app.post('/searchLocation', function(req, res) {
  var id = req.body.id;
  var ObjectID = require('mongodb').ObjectID;
  var o_id = new ObjectID(id);
   db.locations.findOne({ '_id': o_id}, function (err, location) {
    res.send(location);
  });
});
```

