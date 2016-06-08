/**
 * Created by Catalin on 05.06.2016.
 */
/*global io*/
var express = require('express');
var Router = require('router');
var bodyParser = require('body-parser');

var router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
var dynamo = require(path.resolve('./connectToDynamo.js'));

router.post('/subscription/', function(req, res, next) {
   var 
    pub = req.body;
    
    dynamo.savePublication( pub );
});



module.exports = router;
