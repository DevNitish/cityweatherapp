//Routes for city app
var express=require('express');
var CITY=require('../models/City.js');

router =express.Router();

// this is a basic route to insert a data (cities) in DB
router.post('/saveCity', function(req, res,next) {
  CITY.saveCity(req.body, function(err, result) {
    if (result) {
            console.log("Inserted");

      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});
router.post('/editCity', function(req, res,next) {
    console.log("here",req.body);

  CITY.editCity(req.body, function(err, result) {
    if (result) {
            console.log("Edited",result);

      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});
router.post('/deleteCity', function(req, res,next) {
    console.log("here deleteCity",req.body);

  CITY.deleteCity(req.body._id, function(err, result) {
    if (result) {
            console.log("Deleted!");

      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});

router.get('/getCity', function(req, res){
        CITY.findAllCity( function(err, result) {
    if (result) {
      res.send(result);
        
    } else {
      console.log("Error");
       
      res.status(500).send('Internal error occurred--500');
    }
  });
});

module.exports = router;