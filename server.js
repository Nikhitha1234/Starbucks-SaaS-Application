//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Order = require('./model/orders');

//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

var mongoURI = "mongodb://127.0.0.1:27017/starbucksDB";
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection is open");
});

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//adding the /sanjose/order route to our /api router
router.route('/sanjose/order')
 //retrieve all orders from the database
 .get(function(req, res) {
 //looks at our OrdersSchema
 Order.find(function(err, orders) {
    if (err)
     res.send(err);
    //responds with a json object of our database orders.
    res.json(orders)
   });
   
 })

 //post new comment to the database
 .post(function(req, res) {
 var order = new Order();
 //body parser lets us use the req.body
    order.qty = req.body.qty;
    order.name = req.body.name;
    order.milk = req.body.milk;
    order.size = req.body.size;
    order.location = req.body.location;
    order.save(function(err) {
     if (err)
    res.send(err);
    res.json({ message: 'Order is successfully placed!' });
   });
 });




//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
