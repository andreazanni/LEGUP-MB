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

app.post('/api/eventi-mostre', function(req, eventiMostre){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("musei");
        dbo.collection("eventiMostre").find().toArray(function(err, result) {
          if (err) throw err;
          eventiMostre.json(result);
          db.close();
        });
      });
});

//Job che cicla tutti i musei andando a prendere il link del feed RSS e popola i campi EVENTI e MOSTRE
cron.schedule('0 4 * * *', () => {
  console.log(new Date() + ' => Primo step eseguito');
  var eventiTotali = "";
  var mostreTotali = "";
  
  //Mi connetto al DB per recuperare tutti i musei
  MongoClient.connect(url, function(err, dbTotale) {
    if (err) throw err;
    var dboTotale = dbTotale.db("musei");
    dboTotale.collection("musei").find().toArray(function(err, resultMusei) {
    if (err) throw err;
	//Ciclo tutti i musei
    resultMusei.forEach(museo => {
	
	//Se hanno un link per il feed RSS procedo
	if (museo.LINK != undefined) {
	//Faccio il fetch del link
	fetchNode(museo.LINK)
      .then(response => {

        response.text().then((htmltxt) => {
		  //Svuoto i campi per poi ripopolarli
		  museo.MOSTRE = "";
		  museo.EVENTI = "";
          var dom = new JSDOM(htmltxt);
		  //Seleziono tutti gli eventi per poi ciclarli uno per uno
          const allItems = dom.window.document.querySelectorAll('item');
          let allRealItems = Array.from(allItems);
          allRealItems.forEach(item => {
			var docCreato="";
			var tipoEvento = "";
			//Prendo il link del singolo evento e faccio il fetch
            let linkEvento = item.querySelector('guid').textContent;
            fetchNode(linkEvento)
              .then(responseEvento => { 
                responseEvento.text().then((htmltxtEvento) => {
                  var domEvento = new JSDOM(htmltxtEvento);
				  //Seleziono gli elementi con questa classa per recuperare il tipo di evento
                  const allItemsEvento = domEvento.window.document.querySelectorAll('div.special_info-wrapper');
                  let allRealItemsEvento = Array.from(allItemsEvento);
					//Recupero l'evento
					tipoEvento = allRealItemsEvento[0].querySelector('span').textContent.trim();
                    //Creo tutto l'evento con in vari tags
					docCreato = docCreato + '<div class="itemFeed"><h3 class="itemTitle" style="display: none;">' + museo.NOME + '</h3>';
                    docCreato = docCreato + '<h4 style="font-weight: bold;">' + item.querySelector('title').textContent + '</h4><div class="dateItem">' + "("+ item.querySelector('pubdate').textContent + " - " + item.querySelector('pubenddate').textContent + ")</div>";
                    let stringaDescrizione = item.querySelector('description').textContent.split("<p>")
                    let sottoStringaDescrizione = stringaDescrizione[1].split("</p>")
                    let immagineItem = sottoStringaDescrizione[0]
                    docCreato = docCreato + immagineItem;
                    docCreato = docCreato + "<p>" + sottoStringaDescrizione[1] + "</p></div></div>";
                    //Se è una mostra la metto in un array specifico, altrimenti in un altro generico
					if (tipoEvento === "Mostre") {
                      museo.MOSTRE = museo.MOSTRE + docCreato;
					  mostreTotali = mostreTotali + docCreato;
                    } else {
                      museo.EVENTI = museo.EVENTI + docCreato;
					  eventiTotali = eventiTotali + docCreato;
                    }
					//Mi connetto al DB per aggiornare gli eventi e le mostre di quel museo
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
					//Mi connetto al DB per aggiornare tutti gli eventi e le mostre
					MongoClient.connect(url, function(err, dbEventi) {
						if (err) throw err;
						var dboEventi = dbEventi.db("musei");
						try {
							dboEventi.collection("eventiMostre").updateOne(
								{ "TUTTI" : "TUTTI" },
								{ $set: { "EVENTI" : eventiTotali, "MOSTRE" : mostreTotali } }
							);
						} catch (e) {
							console.log(e);
						}
						dboEventi.close();
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
cron.schedule('3 4 * * *', function(req, museo) {
	console.log(new Date() + ' => Secondo step eseguito');
	
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
		  
		  //Se il museo ciclato ha delle mostre, le ordino
		  if (museo.MOSTRE != undefined) {
			//Splitto in un array tutte le mostre
			var arrayElements = museo.MOSTRE.split('<div class="itemFeed">');
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
				idAndDatesMostre.push({
					ID: count,
					DATE: formattedDate.getTime()
				});
				//Creo un nuovo array contenente soltanto le date appena ricavate
				onlyDatesMostre.push(formattedDate.getTime());
			  })
			  //Ordino in modo crescente i times corrispondenti alle date
			  onlyDatesMostre.sort(sortNumber);
			  //Ora che ho l'array ordinato, lo ciclo per riordinare anche l'array con gli indici delle mostre
			  onlyDatesMostre.forEach(item => {
				var object = search(item, idAndDatesMostre);
				finalDatesMostre.push(object.ID);
			  })
			  //Adesso ho gli indici ordinati per data crescente e creo la stringona finale con le mostre ordinate
			  finalDatesMostre.forEach(id => {
				  //Riaggiungo il tag che avevo usato all'inizio per lo split
				  finalElementsMostre = finalElementsMostre + '<div class="itemFeed">' + arrayElements[id];
			  })
			  //Mi connetto al DB per aggiornare le mostre di quel museo
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
	
	
	MongoClient.connect(url, function(err, dbTotale) {
		if (err) throw err;
		var dboTotale = dbTotale.db("musei");
		var query = { TUTTI: "TUTTI"};
		dboTotale.collection("eventiMostre").find(query).toArray(function(err, result) {
		  if (err) throw err;
		  //Creo tutti gli array e le stringhe di appoggio che mi serviranno in seguito
		  var idAndDatesEventi = [];
		  var onlyDatesEventi = [];
		  var finalDatesEventi = [];
		  var finalElementsEventi = "";
		  var idAndDatesMostre = [];
		  var onlyDatesMostre = [];
		  var finalDatesMostre = [];
		  var finalElementsMostre = "";
		  
		  //Se ci sono eventi, li ordino
		  if (result[0].EVENTI != undefined) {
		  //Splitto in un array tutti gli eventi
		  var arrayElements = result[0].EVENTI.split('<div class="itemFeed">');
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
		  //Mi connetto al DB per aggiornare gli eventi
		  MongoClient.connect(url, function(err1, db1) {
			if (err1) throw err1;
			var dbo1 = db1.db("musei");
			try {
				dbo1.collection("eventiMostre").updateOne(
					{ "TUTTI" : "TUTTI" },
					{ $set: { "EVENTI" : finalElementsEventi } }
					);
				} catch (e) {
					console.log(e);
				}
				db1.close();
			});
		  }
		  
		  //Se ci sono mostre, le ordino
		  if (result[0].MOSTRE != undefined) {
			//Splitto in un array tutte le mostre
			var arrayElements = result[0].MOSTRE.split('<div class="itemFeed">');
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
				idAndDatesMostre.push({
					ID: count,
					DATE: formattedDate.getTime()
				});
				//Creo un nuovo array contenente soltanto le date appena ricavate
				onlyDatesMostre.push(formattedDate.getTime());
			  })
			  //Ordino in modo crescente i times corrispondenti alle date
			  onlyDatesMostre.sort(sortNumber);
			  //Ora che ho l'array ordinato, lo ciclo per riordinare anche l'array con gli indici delle mostre
			  onlyDatesMostre.forEach(item => {
				var object = search(item, idAndDatesMostre);
				finalDatesMostre.push(object.ID);
			  })
			  //Adesso ho gli indici ordinati per data crescente e creo la stringona finale con le mostre ordinate
			  finalDatesMostre.forEach(id => {
				  //Riaggiungo il tag che avevo usato all'inizio per lo split
				  finalElementsMostre = finalElementsMostre + '<div class="itemFeed">' + arrayElements[id];
			  })
			  //Mi connetto al DB per aggiornare le mostre
			  MongoClient.connect(url, function(err1, db1) {
				if (err1) throw err1;
				var dbo1 = db1.db("musei");
				try {
					dbo1.collection("eventiMostre").updateOne(
						{ "TUTTI" : "TUTTI" },
						{ $set: { "MOSTRE" : finalElementsMostre } }
						);
					} catch (e) {
						console.log(e);
					}
					db1.close();
				});
			}
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