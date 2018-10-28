/*
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// --> 7)  Mount the Logger middleware here
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

/** 1) Meet the node console. *//*
console.log("Hello World");

/** 2) A first working Express Server */
//app.get("/", function(req, res) {
//  res.send("Hello Express");
//});


/** 3) Serve an HTML file *//*
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

/** 4) Serve static assets  *//*
app.use(express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route *//*
app.get("/json", function(req, res) {
  let message = "Hello json";
  console.log(process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {message = message.toUpperCase();}
  res.json({"message": message});
});

/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server *//*
app.get('/now', function(req, res, next) {
  req.time = getTime(req, res);
  next();
  }, function(req, res) {
  console.log(req.time);
  res.send(req.time);
});

function getTime(req, res) {
  return {time: new Date().toString(req.time)};
}

/** 9)  Get input from client - Route parameters *//*
app.get("/:word/echo", function(req, res) {
  res.json({echo: req.params.word});
});

/** 10) Get input from client - Query parameters *//*
// /name?first=<firstname>&last=<lastname>
app.get("/name", function(req, res) {
  res.json({name: req.query.first + " " + req.query.last});
});
  
/** 11) Get ready for POST Requests - the `body-parser` *//*
// place it before all the routes !


/** 12) Get data form POST  *//*
app.post("/name", function(req, res) {
  const first=req.body.first;
  const last=req.body.last;
  console.log("User name = "+ first +", last name "+ last);
  res.json({name: first + " " + last});
});
*/