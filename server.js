//server.js
'use strict'
//first we import our dependencies…
var request    = require('request');
var url        = require('url');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var Order = require('./model/orders');

//and create our instances
var app = express();
var place ;
var host ;
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;



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

//adding the /order route to our /api router

 router.route('/order')

 

 //post new comment to the database
 .post(function(req, res) {

  var order = new Order();
 //body parser lets us use the req.body
    order.qty = req.body.qty;
    order.name = req.body.name;
    order.milk = req.body.milk;
    order.size = req.body.size;
    order.location = req.body.location;
    place = req.body.place;
   
      console.log('Inside Post');
      console.log('The body is');
      console.log(req.body);
    switch(place){
        case 'SanJose': host = "strbks.com";
        break; 
        case 'SanFrancisco': host= "strbksdishant.com";
        break;
        case 'PaloAlto'    : host = "strbksnikhita.com";
        break;
    }
   
   //console.log(host);

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/json',
    'Host': "strbksnikhita.com"  
}
//'http://34.210.7.218:8000'
//'http://54.193.21.4:8000'
// Configure the request
var options = {

    //url: 'http://54.193.21.4/:8000' ,
    url: 'http://54.241.1.103:8080/api/sanJose/order/' ,
    method: 'POST',
    headers: headers,
    body: JSON.stringify({'qty':req.body.qty ,'name': req.body.name ,'milk': req.body.milk, 'size': req.body.size ,'location': req.body.location
     })
}

// Start the request
request(options, function (error, response, body) {
    if (!error) {
       
        // console.log(response.body);
       var body = JSON.stringify(response);
        console.log('The data is sent');
       res.send(body);
    }
   
})

    
 });

 router.route('/order/:order_id')
  
//retrieve all orders from the database
 .get(function(req, res) {
  console.log("I am in get");
  console.log(req.params.order_id);
    // Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/json',
    'Host': 'strbks.com'  
 }

// Configure the request
// console.log(req.body);
var options = {
    url: 'http://54.193.21.4:8000/id/'+req.params.order_id,
    method: 'GET',
    headers: headers
 }   


//Start the request
request(options, function (error, response, body) {
    if (!error) {
        // Print out the response body
        // console.log(response.body);
     //  var body = JSON.stringify(response);
       //console.log(body);
       res.send(body);

    
    }
   
 });
//console.log(options.url)

})

//retrieve all orders from the database

//retrieve all orders from the database

.put(function(req, res) {

 console.log("I am in put");
 console.log(req.params.order_id);
   // Set the headers
 var headers = {
     'User-Agent':       'Super Agent/0.0.1',
     'Content-Type':     'application/json',
     'Host': host
  }

 // Configure the request
 // console.log(req.body);
 var options = {

     //url: 'http://54.193.21.4:8000/id/'+req.params.order_id,
     url:'http://54.144.207.3:5000/api/PaloAlto/order/'+req.params.order_id,
     method: 'PUT',
     headers: headers,
     body: JSON.stringify({'qty':req.body.qty ,'name': req.body.name ,'milk': req.body.milk, 'size': req.body.size ,'location': req.body.location
     })
  }  




     url: 'http://54.193.21.4:8000/id/'+req.params.order_id,
     method: 'PUT',
     headers: headers
  }  



 //Start the request
 request(options, function (error, response, body) {
     if (!error) {
         // Print out the response body
         // console.log(response.body);

        var body = JSON.stringify(response);

      //  var body = JSON.stringify(response);

        //console.log(body);
        res.send(body);

     
     }
 
});
//console.log(options.url)

}); 






//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
