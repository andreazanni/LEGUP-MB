import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EventiCalendarioPage } from '../eventi-calendario/eventi-calendario';
import { Calendar } from '@ionic-native/calendar';
import { RicercaMuseiProvider } from '../../providers/ricerca-musei/ricerca-musei';


/**
 * Generated class for the TestCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-calendar',
  templateUrl: 'test-calendar.html',
})
export class TestCalendarPage {
  myContenuto: any;
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  AREA: any;
  NOME: any;
  eventoObj: object;
  calendarioEventi: any;
  eventiDelMese: any;

  unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public museiService: RicercaMuseiProvider, public navParams: NavParams, public menuCtrl: MenuController, public platform: Platform, private alertCtrl: AlertController, private calendar: Calendar) {
    this.myContenuto = this.navParams.get('contenuto');

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TestCalendarPage');
    this.initializeBackButton();
  }

  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
    this.scaricaEventiMuseo();
    this.getDaysOfMonth();
    //this.loadEventThisMonth();
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(let i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (let i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(let i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.goHomePage();
    });
  }

  //Associato al tasto per tornare all'home page
  goHomePage() {
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    this.menuCtrl.enable(true, "menuPrincipale");
  }

  addEvent() {
    this.navCtrl.push(EventiCalendarioPage);
  }

  loadEventThisMonth() {
    this.eventList = new Array();
    console.log(this.eventList);
    var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
    console.log(startDate)
    console.log(endDate)
    this.calendar.listEventsInRange(startDate, endDate).then(
      (msg) => {
        msg.forEach(item => {
          this.eventList.push(item);
          console.log(msg);
          console.log(item);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  checkEvent(day) {
    //console.log(day);
    var hasEvent = false;
    var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    //console.log(this.eventList);
    this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });
    return hasEvent;
  }

  selectDate(day) {
    this.isSelected = false;
    this.selectedEvent = new Array();
    var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    console.log(this.eventList);
    this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        this.isSelected = true;
        this.selectedEvent.push(event);
      }
    });
  }

  deleteEvent(evt) {
    // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
    // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure want to delete this event?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(
              (msg) => {
                console.log(msg);
                this.loadEventThisMonth();
                this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
              },
              (err) => {
                console.log(err);
              }
            )
          }
        }
      ]
    });
    alert.present();
  }





// scaricaEventiMuseo() {
//     let options = {
//       AREA: 'Patrimonio industriale e cultura tecnica'
//     };

//     this.museiService.startRicercaMusei(options).then((data) => {
//       console.log(data);
//       console.log(data[0].EVENTI);
//       var domParser = new DOMParser()
//       let doc = domParser.parseFromString(data[0].EVENTI, 'text/html');
//       const allItems = doc.querySelectorAll('.itemFeed');
//       const allRealItems = Array.from(allItems);
//       console.log(allItems);
//       this.calendarioEventi = new Array();
//       allRealItems.forEach(item => {
//         console.log(item)
//         let periodo = item.getElementsByClassName('dateItem')[0].innerHTML.split(" - ");
//         let dataInizio = periodo[0].replace("(","").substr(5, 11);
//         let dataFine = periodo[1].replace(")","").substr(5, 11);
//         console.log(periodo);
//         let evento = {
//           "location" : item.getElementsByTagName('h3')[0].innerHTML,
//           "title": item.getElementsByTagName('h4')[0].innerHTML,
//           "imagine": item.getElementsByTagName('img')[0].src,
//           "notes": item.getElementsByTagName('p')[0].innerHTML,
//           "startDate": new Date(dataInizio),
//           "endDate": new Date(dataFine),
//           "elementHTML": item
//         }
//         this.calendarioEventi.push(evento);
//     });
//     console.log(this.calendarioEventi);
//     this.caricaEventiDelMese();
//   });
// }

scaricaEventiMuseo() {

    console.log(this.myContenuto);
    console.log(this.myContenuto[0].EVENTI);
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(this.myContenuto[0].EVENTI, 'text/html');
    const allItems = doc.querySelectorAll('.itemFeed');
    const allRealItems = Array.from(allItems);
    console.log(allItems);
    this.calendarioEventi = new Array();
    allRealItems.forEach(item => {
      console.log(item)
      let periodo = item.getElementsByClassName('dateItem')[0].innerHTML.split(" - ");
      let dataInizio = periodo[0].replace("(","").substr(5, 11);
      let dataFine = periodo[1].replace(")","").substr(5, 11);
      console.log(periodo);
      let evento = {
        "location" : item.getElementsByTagName('h3')[0].innerHTML,
        "title": item.getElementsByTagName('h4')[0].innerHTML,
        "imagine": item.getElementsByTagName('img')[0].src,
        "notes": item.getElementsByTagName('p')[0].innerHTML,
        "startDate": new Date(dataInizio),
        "endDate": new Date(dataFine),
        "elementHTML": item
      }
      this.calendarioEventi.push(evento);
  });
  console.log(this.calendarioEventi);
  this.caricaEventiDelMese();
}

caricaEventiDelMese() {
  this.eventiDelMese = new Array();
  console.log(this.eventiDelMese);
  var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
  console.log(startDate)
  console.log(endDate)
  this.calendarioEventi.forEach( evento => {
    if( (evento.startDate >= startDate && evento.startDate <= endDate) || (evento.endDate >= startDate && evento.endDate <= endDate))
    this.eventiDelMese.push(evento);

  });
  console.log(this.eventiDelMese);
}

controllaEventi(day) {
  //console.log(day);
  var hasEvent = false;
  // var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
  // var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
  var thisDate1 = new Date(this.date.getFullYear(), this.date.getMonth(), day, 0,0,0);
  //console.log(this.eventList);
  this.eventiDelMese.forEach(evento => {
    if((evento.startDate <= thisDate1) && (thisDate1 <= evento.endDate)) {
      hasEvent = true;
    }
  });
  return hasEvent;
}

selezionaData(day) {
  this.isSelected = false;
  this.selectedEvent = new Array();
  var thisDate1 = new Date(this.date.getFullYear(), this.date.getMonth(), day, 0,0,0);
  console.log(this.eventiDelMese);
  this.eventiDelMese.forEach(evento => {
    console.log(evento.startDate, thisDate1)
    if((evento.startDate <= thisDate1) && (thisDate1 <= evento.endDate)) {
      this.isSelected = true;
      this.selectedEvent.push(evento);
      console.log("eventoSelezionato")
    }
  });
  console.log(this.selectedEvent)
}


}
