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

var AWS = require('../config.js').AWS;

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Subscription";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'publsher' });
});
router.get('/testput', function(req, res, next) {
  var company = 'Google';
  var item = {
    "Company": company,
    "Publication":{
      "plot": "Nothing happens at all.",
      "rating": 0
    }
  };

  var params = {
    TableName:table,
    Item: {
      "Company" : company,
      "Publication" :  JSON.stringify(item)
    }
  };

  console.log("Adding a new item...");
  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
    }
  });


  res.render('index', { title: 'insert' });
});

router.get('/testget', function(req, res, next) {
  var company = 'Google';
  var params = {
    TableName: "Publication",
    KeyConditionExpression: "Company = :comp",
    ExpressionAttributeValues: {
      ":comp": company
    }
  };

  docClient.query(params, function(err, data) {
    if (err)
      console.log(JSON.stringify(err, null, 2));
    else
      console.log(JSON.stringify(data, null, 2));
  });
  res.render('index', { title: 'insert' });
});

router.post('/subscription/', function(req, res, next) {

  //subscriptions.push(req.body);
});



module.exports = router;
