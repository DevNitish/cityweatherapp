const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cityRoute= require('./server/routes')
router=express.Router();
const request = require("request");
const mongoose = require('mongoose');
const config = require('./server/config/config'); // getting the mongo server from config file

//Connect to Mongo using mongoose
app.use(function(req, res, next) {
  if (mongoose.connection.readyState != 1) {
    mongoose.connect(config.mongoconnectionstring, function(error) {
      if (error) {
        throw error;
      } // Handle failed connection
      next();
    });
  } else {
    next();
  }
});

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//connect to db

router.post('/getweather',function(req,res,next){
	console.log('req.body.city==>',req.body.q);
		var options = { method: 'GET',
		  url: 'http://api.openweathermap.org/data/2.5/forecast',
		  qs: 
		   { q: req.body.q,
		     units: 'metric',
		     APPID: 'fc58ba73fc193a3d2fdf7f1e0f35d074'
				 }		  
				};

		request(options, function (error, response, body) {
		  if (error){ 
            res.status(400)
		  	res.send(error);
		  	throw new Error(error);
		  }else{
            res.status(200)
              res.send(body);
          }
		 
		});
   
});
app.use('/',router);
app.use('/city',cityRoute);
module.exports = app;
