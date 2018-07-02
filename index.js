const MongoClient = require('mongodb').MongoClient;

exports.handler = function handler(event, context, callback) {  
  const MONGO_URL = "mongodb://pdadi:miracle123@ds121331.mlab.com:21331/adesa-testing";
  MongoClient.connect(MONGO_URL, function (err, db) {
    if (err) {
      return callback(null, err);
    }
    var myobj = { username: event["username"], password: event["password"] };
      db.collection("testing").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      //db.close();
    });
    db.close();
    callback(null, "Successfully inserted record into DB")
  });
};