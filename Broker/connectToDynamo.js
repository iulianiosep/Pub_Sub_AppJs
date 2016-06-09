var 
  AWS  =  require('./config').AWS,
  docClient = new AWS.DynamoDB.DocumentClient();

var
_saveSubscription = function ( sub ) {
   var params = {
        TableName: 'Subscription',
        Item: {
            "Key" : sub.company,
            "Publication" :  JSON.stringify(pub)
        }
    };

    console.log("Adding a new sub...");
    docClient.put(params, function(err, data) {
        if (err) {
          cb ({
            status : 'error',
            data :  JSON.stringify(err, null, 2)
          });
           
        } else {
          cb ({
            status : 'succes',
            data : JSON.stringify(data, null, 2)
          });
        }
    });
},
_savePublication = function ( pub, cb) {
  console.log('Save pub');
    var params = {
        TableName: 'Publication',
        Item: {
            "Company" : pub.company,
            "Publication" :  JSON.stringify(pub)
        }
    };

    console.log("Adding a new pub...");
    docClient.put(params, function(err, data) {
        if (err) {
          cb ({
            status : 'error',
            data :  JSON.stringify(err, null, 2)
          });
           
        } else {
          cb ({
            status : 'succes',
            data : JSON.stringify(data, null, 2)
          });
        }
    });
},
_getAllPublicationsByCompany = function (companyName , cb) {
  var params = {
      TableName: "Publicaton",
      KeyConditionExpression: "Company = :company",
      ExpressionAttributeValues: {
          ":company": companyName
      }
  };

  docClient.query(params, function(err, data) {
      if (err){
         cb( {
          status: 'error',
          data : JSON.stringify(err, null, 2)
        });
      }
      else {
        cb({
           status : 'succes',
           data : JSON.stringify(data, null, 2)
        });
      }
  });
},
_getAllSubscriptionByCompany = function (companyName, cb) {
  var params = {
      TableName: "Subscription",
      KeyConditionExpression: "Company = :company",
      ExpressionAttributeValues: {
          ":company": companyName
      }
  };

  docClient.query(params, function(err, data) {
      if (err){
         cb( {
          status: 'error',
          data : JSON.stringify(err, null, 2)
        });
      }
      else {
        cb({
           status : 'succes',
           data : JSON.stringify(data, null, 2)
        });
      }
  });
};
var exp = {
  getAllSubscriptionByCompany : _getAllSubscriptionByCompany,
  getAllPublicationsByCompany : _getAllPublicationsByCompany,
  saveSubscription : _saveSubscription,
  savePublication : _savePublication
};

module.exports = exp;


// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'publsher' });
// });
// router.get('/testput', function(req, res, next) {
//     var company = 'Google';
//     var item = {
//         "Company": company,
//         "Publication":{
//             "plot": "Nothing happens at all.",
//             "rating": 0
//         }
//     };

//     var params = {
//         TableName:table,
//         Item: {
//             "Company" : company,
//             "Publication" :  JSON.stringify(item)
//         }
//     };

//     console.log("Adding a new item...");
//     docClient.put(params, function(err, data) {
//         if (err) {
//             console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//             console.log("Added item:", JSON.stringify(data, null, 2));
//         }
//     });
//     res.render('index', { title: 'insert' });
// });

// router.get('/testget', function(req, res, next) {
//     var company = 'Google';
//     var params = {
//         TableName: "Publication",
//         KeyConditionExpression: "Company = :comp",
//         ExpressionAttributeValues: {
//             ":comp": company
//         }
//     };

//     docClient.query(params, function(err, data) {
//         if (err)
//             console.log(JSON.stringify(err, null, 2));
//         else
//             console.log(JSON.stringify(data, null, 2));
//     });
//     res.render('index', { title: 'insert' });
// });