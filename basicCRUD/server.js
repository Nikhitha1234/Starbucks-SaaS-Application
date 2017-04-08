// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Bear     = require('./MODELS/bear');
var Dog      = require('./MODELS/dog');
var Order    = require('./MODELS/order');

var mongoose   = require('mongoose');
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
mongoose.connect('mongodb://localhost/test')
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure we go to the next routes and don't stop here
// });


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// router.route('/bears')

//     // create a bear (accessed at POST http://localhost:8080/api/bears)
//     .post(function(req, res) {
        
//         var bear = new Bear();      // create a new instance of the Bear model
//         bear.name = req.body.name;  // set the bears name (comes from the request)
//               //res.json({message : 'i know nothing'});  
//         // save the bear and check for errors
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Bear created!' });
//         });
        
//     })

//     .get(function(req, res) {
//         Bear.find(function(err, bears) {
//             if (err)
//                 res.send(err);

//             res.json(bears);
//         });
//     });

router.route('/order')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var order = new Order();      // create a new instance of the Bear model
        order.qty = req.body.qty;

        order.name = req.body.name; 

        order.milk = req.body.milk ;
        order.size = req.body.size ; // set the bears name (comes from the request)
              //res.json({message : 'i know nothing'});  
        // save the bear and check for errors
        order.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Order Placed' });
        });

       })


       .get(function(req, res) {
        Order.find(function(err, order) {
            if (err)
                res.send(err);

            res.json(order);
        });
    });
       
    

// router.route('/dogs')

//     // create a dog (accessed at POST http://localhost:8080/api/dogs)
//     .post(function(req, res) {
        
//         var dog = new Dog();      // create a new instance of the Dog model
//         dog.name = req.body.name; 
//         dog.type = req.body.type; // set the dogs name (comes from the request)
              
        
//         dog.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'dog created!' });
//         });
        
//     })

//     .get(function(req, res) {
//         Dog.find(function(err, dogs) {
//             if (err)
//                 res.send(err);

//             res.json(dogs);
//         });
//     });

// router.route('/bears/:bear_id')

//     // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
//     .get(function(req, res) {
//         Bear.findById(req.params.bear_id, function(err, bear) {
//             if (err)
//                 res.send(err);
//             res.json(bear);
//         });
//     })


//     .put(function(req, res) {

//         // use our bear model to find the bear we want
//         Bear.findById(req.params.bear_id, function(err, bear) {

//             if (err)
//                 res.send(err);

//             bear.name = req.body.name;  // update the bears info

//             // save the bear
//             bear.save(function(err) {
//                 if (err)
//                     res.send(err);

//                 res.json({ message: 'Bear updated!' });
//             });

//         });
//     })


//     .delete(function(req, res) {
//         Bear.remove({
//             _id: req.params.bear_id
//         }, function(err, bear) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Successfully deleted' });
//         });
//     });

// router.route('/bears/whitebear')

//     // create a bear (accessed at POST http://localhost:8080/api/bears)
//     .post(function(req, res) {
        
//         var bear = new Bear();      // create a new instance of the Bear model
//         bear.name = req.body.name;  // set the bears name (comes from the request)
//               //res.json({message : 'i know nothing'});  
//         // save the bear and check for errors
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: ' white Bear created!' });
//         });
        
//     })

//     .get(function(req, res) {
//         Bear.find(function(err, bears) {
//             if (err)
//                 res.send(err);

//             res.json(bears);
//         });
//     });





// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
