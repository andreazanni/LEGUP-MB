var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var cron = require('node-cron');
var fetchNode = require("node-fetch");
var jsdom = require("jsdom");
var { JSDOM } = jsdom;


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

app.post('/api/museo', function(req, museo){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("musei");
        var query = { NOME: req.body.NOME };
        dbo.collection("musei").find(query).toArray(function(err, result) {
          if (err) throw err;
          museo.json(result);
          db.close();
        });
      });
});

app.post('/api/geolocalizzazioni', function(req, geo){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("musei");
        dbo.collection("geolocalizzazioni").find().toArray(function(err, result) {
          if (err) throw err;
          geo.json(result);
          db.close();
        });
      });
});

app.post('/api/istituzione', function(req, istituzione){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("musei");
        dbo.collection("istituzione").find().toArray(function(err, result) {
          if (err) throw err;
          istituzione.json(result);
          db.close();
        });
      });
});

cron.schedule('36 10 * * *', () => {
  console.log('Running at 10:30');

  var eventi = "";
  var mostre = "";
  
  fetchNode("http://informa.comune.bologna.it/iperbole/rss/events/25")
      .then(response => {

        response.text().then((htmltxt) => {
          var dom = new JSDOM(htmltxt);
          const allItems = dom.window.document.querySelectorAll('item');
          let allRealItems = Array.from(allItems);
          allRealItems = allRealItems.reverse();
          allRealItems.forEach(item => {
			var docCreato="";
			var tipoEvento = "";
            let linkEvento = item.querySelector('guid').textContent;
            fetchNode(linkEvento)
              .then(responseEvento => { 
                responseEvento.text().then((htmltxtEvento) => {
                  var domEvento = new JSDOM(htmltxtEvento);
                  const allItemsEvento = domEvento.window.document.querySelectorAll('div.special_info-wrapper');
                  let allRealItemsEvento = Array.from(allItemsEvento);
					tipoEvento = allRealItemsEvento[0].querySelector('span').textContent.trim();
                    docCreato = docCreato + '<div class="itemFeed">';
                    docCreato = docCreato + '<h4 style="font-weight: bold;">' + item.querySelector('title').textContent + '</h4><div class="dateItem">' + "("+ item.querySelector('pubdate').textContent + " - " + item.querySelector('pubenddate').textContent + ")</div>";
                    let stringaDescrizione = item.querySelector('description').textContent.split("<p>")
                    let sottoStringaDescrizione = stringaDescrizione[1].split("</p>")
                    let immagineItem = sottoStringaDescrizione[0]
                    docCreato = docCreato + immagineItem;
                    docCreato = docCreato + "<p>" + sottoStringaDescrizione[1] + "</p></div></div>";
                    if (tipoEvento === "Mostre") {
                      mostre = mostre + docCreato;
                    } else {
                      eventi = eventi + docCreato;
                    }
					MongoClient.connect(url, function(err, db) {
						if (err) throw err;
						var dbo = db.db("musei");
						try {
							dbo.collection("musei").updateOne(
								{ "NOME" : "Museo internazionale e biblioteca della musica" },
								{ $set: { "EVENTI" : eventi, "MOSTRE" : mostre } }
							);
						} catch (e) {
							console.log(e);
						}
					});
                });
			  })
			  .catch(error => {
				console.log("Errore fetch evento: " + error);
			});
          });
        });
      })
	  .catch(error => {
		  console.log("Errore generico evento: " + error);
	  });
});

app.listen(3000);
console.log("App listening on port 3000");