var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

//var url = "mongodb://musei:bologna1@ds145412.mlab.com:45412/musei";
var url = "mongodb://@localhost:27017/musei";

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());

app.get('/api/check', function(req,res) {
    res.write('Server running!');
    res.end();
});

app.post('/api/musei', function(req, musei){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("musei");
        var query = { AREA: req.body.AREA };
		    //Ordino i musei alfabeticamente
		    var mySort = { NOME: 1 };
        dbo.collection("musei").find(query).sort(mySort).toArray(function(err, result) {
          if (err) throw err;
          musei.json(result);
          db.close();
        });
      });
});

app.post('/api/museo', function(req, musei){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("musei");
        var query = { NOME: req.body.NOME };
        dbo.collection("musei").find(query).toArray(function(err, result) {
          if (err) throw err;
          musei.json(result);
          db.close();
        });
      });
});


app.listen(3000);
console.log("App listening on port 3000");