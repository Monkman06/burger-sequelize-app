
// var models  = require('../models');
var burger  = require('../models')["Burger"];
var express = require('express');
var router  = express.Router();


router.get('/', function(req,res) {
		res.redirect('/burgers')
});




router.get('/burgers', function(req, res) {


  burger.findAll()

  .then(function(burger_data) {
  return res.render('index', {burger_data});
});
});



router.post('/burgers/create', function (req, res) {
  

    burger.create({
    burger_name: req.body.burger_name,

  })
  .then(function() {
    res.redirect('/');
  })
});




router.put('/burgers/update', function(req,res){
    // update one of the burgers
    burger.findOne({where:{id: req.body.burger_id}})
    .then(function(theBurger){
        return theBurger.updateAttributes({
            devoured: true
        }).then(function(){
            // reload the page
            res.redirect('/');
        })
    });
});


module.exports = router;
module.exports = router;
