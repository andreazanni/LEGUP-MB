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

cron.schedule('3 12 * * *', () => {
  console.log('Running 1');
  
  MongoClient.connect(url, function(err, dbTotale) {
    if (err) throw err;
    var dboTotale = dbTotale.db("musei");
    dboTotale.collection("musei").find().toArray(function(err, resultMusei) {
    if (err) throw err;
    resultMusei.forEach(museo => {
	
	if (museo.LINK != undefined) {
	fetchNode(museo.LINK)
      .then(response => {

        response.text().then((htmltxt) => {
		  museo.MOSTRE = "";
		  museo.EVENTI = "";
          var dom = new JSDOM(htmltxt);
          const allItems = dom.window.document.querySelectorAll('item');
          let allRealItems = Array.from(allItems);
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
                      museo.MOSTRE = museo.MOSTRE + docCreato;
                    } else {
                      museo.EVENTI = museo.EVENTI + docCreato;
                    }
					MongoClient.connect(url, function(err, db) {
						if (err) throw err;
						var dbo = db.db("musei");
						try {
							dbo.collection("musei").updateOne(
								{ "NOME" : museo.NOME },
								{ $set: { "EVENTI" : museo.EVENTI, "MOSTRE" : museo.MOSTRE } }
							);
						} catch (e) {
							console.log(e);
						}
						db.close();
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
	}
	});
	dbTotale.close();
    });
  });
});

//Job che ordina per data crescente gli eventi e le mostre di tutti i musei
cron.schedule('* * * * *', function(req, museo) {
	console.log('');
	
	MongoClient.connect(url, function(err, dbTotale) {
		if (err) throw err;
		var dboTotale = dbTotale.db("musei");
		dboTotale.collection("musei").find().toArray(function(err, resultMusei) {
		if (err) throw err;
		//Ho recuperato tutti i musei, ora li ciclo uno ad uno
		resultMusei.forEach(museo => {
		
		  //Creo tutti gli array e le stringhe di appoggio che mi serviranno in seguito
		  var idAndDatesEventi = [];
		  var onlyDatesEventi = [];
		  var finalDatesEventi = [];
		  var finalElementsEventi = "";
		  var idAndDatesMostre = [];
		  var onlyDatesMostre = [];
		  var finalDatesMostre = [];
		  var finalElementsMostre = "";
		  
		  //Se il museo ciclato ha degli eventi, li ordino
		  if (museo.EVENTI != undefined) {
		  //Splitto in un array tutti gli eventi
		  var arrayElements = museo.EVENTI.split('<div class="itemFeed">');
		  //Elimino il primo elemento dell'array perchè con lo split precedente è stato creato un elemento vuoto
		  arrayElements.splice(0, 1);
		  //Mi serve per ricordarmi a che indice si trova l'elemento appena ciclato
		  var count = -1;
		  arrayElements.forEach(item => {
			//Allineo il counter all'indice dell'item corrente
			count++;
			//Ricavo solo la porzione di codice relativa alle date
			var dateElements = item.split('<div class="dateItem">');
			//La splitto ulteriormente usando il carattere di fine tag
			var dateString = dateElements[1].split('>');
			//Prendo il primo dei due elementi dell'array
			var dateStartEnd = dateString[0];
			//Qui ho finalmente la data iniziale dell'evento da cui ricavo giorno, mese e anno
			var dateStart = dateStartEnd.slice(5, 17);
			var day = dateStart.slice(1, 3);
			//Il mese lo prendo in formato numerico
			var month = translateMonth(dateStart.slice(4, 7));
			var year = dateStart.slice(8, dateStart.length);
			//Creo una nuova data in formato Date
			var formattedDate = new Date(year, month, day);
			//Popolo un array formato da key => count, value => DATE in formato time
			idAndDatesEventi.push({
				ID: count,
				DATE: formattedDate.getTime()
			});		
			//Creo un nuovo array contenente soltanto le date appena ricavate
			onlyDatesEventi.push(formattedDate.getTime());
		  })
		  //Ordino in modo crescente i times corrispondenti alle date
		  onlyDatesEventi.sort(sortNumber);
		  //Ora che ho l'array ordinato, lo ciclo per riordinare anche l'array con gli indici degli eventi
		  onlyDatesEventi.forEach(item => {
			var object = search(item, idAndDatesEventi);
			finalDatesEventi.push(object.ID);
		  })
		  //Adesso ho gli indici ordinati per data crescente e creo la stringona finale con gli eventi ordinati
		  finalDatesEventi.forEach(id => {
			  //Riaggiungo il tag che avevo usato all'inizio per lo split
			  finalElementsEventi = finalElementsEventi + '<div class="itemFeed">' + arrayElements[id];
		  })
		  //Mi connetto al DB per aggiornare gli eventi di quel museo
		  MongoClient.connect(url, function(err1, db1) {
			if (err1) throw err1;
			var dbo1 = db1.db("musei");
			try {
				dbo1.collection("musei").updateOne(
					{ "NOME" : museo.NOME },
					{ $set: { "EVENTI" : finalElementsEventi } }
					);
				} catch (e) {
					console.log(e);
				}
				db1.close();
			});
		  }
		  
		  if (museo.MOSTRE != undefined) {
			var arrayElements = museo.MOSTRE.split('<div class="itemFeed">');
			arrayElements.splice(0, 1);
			var count = -1;
			arrayElements.forEach(item => {
				count++;
				var dateElements = item.split('<div class="dateItem">');
				var dateString = dateElements[1].split('>');
				var dateStartEnd = dateString[0];
				var dateStart = dateStartEnd.slice(5, 17);
				var day = dateStart.slice(1, 3);
				var month = translateMonth(dateStart.slice(4, 7));
				var year = dateStart.slice(8, dateStart.length);
				var formattedDate = new Date(year, month, day);
				idAndDatesMostre.push({
					ID: count,
					DATE: formattedDate.getTime()
				});
				onlyDatesMostre.push(formattedDate.getTime());
			  })
			  onlyDatesMostre.sort(sortNumber);
			  onlyDatesMostre.forEach(item => {
				var object = search(item, idAndDatesMostre);
				finalDatesMostre.push(object.ID);
			  })
			  finalDatesMostre.forEach(id => {
				  finalElementsMostre = finalElementsMostre + '<div class="itemFeed">' + arrayElements[id];
			  })
			  MongoClient.connect(url, function(err1, db1) {
				if (err1) throw err1;
				var dbo1 = db1.db("musei");
				try {
					dbo1.collection("musei").updateOne(
						{ "NOME" : museo.NOME },
						{ $set: { "MOSTRE" : finalElementsMostre } }
						);
					} catch (e) {
						console.log(e);
					}
					db1.close();
				});
			}
		});
	  });
	  dbTotale.close();
    });
});

//Ordina numericamente in modo crescente
function sortNumber(a,b) {
    return a - b;
}

//Trova l'oggetto di un array che matcha con il parametro passato
function search(dateFind, dates){
	var i = 0;
	var object;
	while (i < dates.length) {
        if (dates[i].DATE === dateFind) {
            object = dates[i];
			break;
        } else {
			i++;
		}
	}
	
	dates.splice(i, 1);
	return object;
}

//Data la sigla inglese del mese restituisce il numero corrispondente
function translateMonth(month) {
	var number = 0;
	switch(month) {
		case "Jan":
			number = 0;
			break;
		
		case "Feb":
			number = 1;
			break;
			
		case "Mar":
			number = 2;
			break;
			
		case "Apr":
			number = 3;
			break;
			
		case "May":
			number = 4;
			break;
			
		case "Jun":
			number = 5;
			break;
			
		case "Jul":
			number = 6;
			break;
			
		case "Aug":
			number = 7;
			break;
			
		case "Sep":
			number = 8;
			break;
			
		case "Oct":
			number = 9;
			break;
			
		case "Nov":
			number = 10;
			break;
			
		case "Dec":
			number = 11;
			break;
	}
	
	return number;
}

app.listen(3000);
console.log("App listening on port 3000");