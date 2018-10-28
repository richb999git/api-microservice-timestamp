// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp", function(req, res) {
  //if no req.params.date_string set as current date
  let d = new Date();
  res.json({"unix": d.getTime(), "utc": d.UTCString()});
});


app.get("/api/timestamp/:date_string", function(req, res) {
  let j, d, u;
  d = req.params.date_string;
  
  if (!isNaN(d)) {
    // it's a number
    j = {"unix": d * 1000, "utc": new Date(d * 1000).toUTCString()};
    
  } else {
      // it's a date or it's invalid
      u = new Date(d);
      if (u + "" !== "Invalid Date") {
        // it's a date
        j = {"unix": u.getTime(), "utc": u.toUTCString()};
        
      } else j = {"error" : "Invalid Date" };
  } 
  
  res.json(j);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});