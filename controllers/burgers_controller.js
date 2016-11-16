//Here is where you create all the functions that will do the routing for your app, and the logic of each route.
var express = require('express');
var router = express.Router();
var burger = require("./../models");
models.burger.sync();
//get route -> index
router.get('/', function(req,res) {
    res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
  //express callback response by calling burger.selectAllBurger
  models.burger.all.then(function(result){
    //wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    var hbsOject = {burgers: result}
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

//post route -> back to index
router.post('/burgers/create', function(req, res) {
  //takes the request object using it as input for buger.addBurger
  models.burger.create({burger_name: req.body.burger_name, devoured:
    req.body.devoured}).
  then(function(){
    //wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
    res.redirect('/burgers');
  });
});

//put route -> back to index
router.put('/burgers/update/:id', function(req,res){
  models.burger.update({
    devoured: req.body.devoured
  },{
    where:{id: req.params.id}
  }).then(function(){
    //wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
    //console.log(result);
    res.redirect('/patties');
  });
});

module.exports = router;