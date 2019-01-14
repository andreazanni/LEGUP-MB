import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { MuseoPage } from '../museo/museo';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Calendar } from '@ionic-native/calendar';


/**
 * Generated class for the MmEventiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mm-eventi',
  templateUrl: 'mm-eventi.html',
})
export class MmEventiPage {

  myVoceMenu: string;
  myContenuto: string;
  myMuseoClass: string;
  myContentClass: string;
  myMuseo: any;
  unregisterBackButtonAction: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech, public menuCtrl: MenuController, public nativePageTransitions: NativePageTransitions, public loadingCtrl: LoadingController, private calendar: Calendar, public alertCtrl: AlertController,
    public platform: Platform) {

    this.myVoceMenu = this.navParams.get('voceMenu');
    this.myContenuto = this.navParams.get('contenuto');
    this.myMuseoClass = this.navParams.get('museoClass');
    this.myContentClass = this.navParams.get('contenutoClass');
    this.myMuseo = this.navParams.get('datiMuseo');
  }

  ionViewDidLoad() {
     // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
     var idClass = document.getElementById('paginaMmEventi');
     idClass.classList.add(this.myMuseoClass);

     document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
     document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;

     //carico il feed degli eventi in lista
      var idCardContenuto = document.getElementById('contenuto');
      //idCardContenuto.innerHTML = this.myContenuto;
      var cardEvento = document.createElement('ion-card');
      //idCardContenuto.insertAdjacentHTML('afterbegin',this.myContenuto);

     var idContainerContenuto = document.getElementById('container-contenuto');
     var idContentHeader = document.getElementById('content-header');
     //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
     //lo scrolling su lato inferiore
     idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";

    //carico gli eventi da calendario

     this.menuCtrl.enable(false, "menuPrincipale");
     this.initializeBackButton();
     this.cambiaVistaEventi('list_view');
  }

  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
    this.caricaEventi();
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
    this.caricaEventiDelMese();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
    this.caricaEventiDelMese();
  }

  caricaEventi() {
    console.log(this.myContenuto);
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(this.myContenuto, 'text/html');
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


  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.stopRead();
      this.navCtrl.push(MuseoPage, {musei: this.myMuseo, classe1: this.myMuseoClass});
      this.navCtrl.removeView(this.navCtrl.last());
    });
  }

  //Apre il side menu
  openMenu() {
    this.stopRead();
    let options : NativeTransitionOptions = {
      direction: 'right',
      duration: 600
    }
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(MenuPage, {datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "EventiService"}, {animate: true, direction: "back"});
    this.navCtrl.removeView(this.navCtrl.last());
 }

  read() {
    this.tts.speak({text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88});
    document.getElementById("mic").style.display = "none";
    document.getElementById("disabled-mic").style.display = "inline";
 }

  stopRead() {
    this.tts.speak("");
    document.getElementById("mic").style.display = "inline";
    document.getElementById("disabled-mic").style.display = "none";
 }

  //Associato al tasto per tornare all'home page
  goHomePage() {
    this.stopRead();
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    this.menuCtrl.enable(true, "menuPrincipale");
  }

  cambiaVistaEventi(element){
    let idElementCalendar = document.getElementById('calendar_view');
    let idElementList = document.getElementById('list_view');

    let elementsClassiCalendar = document.getElementsByClassName('vista_calendario');
    let arrayCalendar = [];
    arrayCalendar = Array.from(elementsClassiCalendar);

    let elementsClassiList = document.getElementsByClassName('vista_lista');
    let arrayList = [];
    arrayList = Array.from(elementsClassiList);

    console.log(elementsClassiCalendar);
    console.log(element,idElementCalendar.classList.contains('view_selected'),idElementList.classList.contains('view_selected'))
    if(element == 'list_view' && idElementCalendar.classList.contains('view_selected')){
      //settare la classe dell'elemento
      arrayCalendar.forEach(element => {
        element.style.display = 'none';
      });
      arrayList.forEach(element => {
        element.style.display = 'block';
      });
      idElementList.classList.toggle('view_selected');
      idElementCalendar.classList.toggle('view_selected');
    }
    else if(element == 'calendar_view' && idElementList.classList.contains('view_selected')) {
      //settare la classe dell'elemento
      arrayList.forEach(element => {
        element.style.display = 'none';
      });
      arrayCalendar.forEach(element => {
        element.style.display = 'block';
      });
      idElementList.classList.toggle('view_selected');
      idElementCalendar.classList.toggle('view_selected');
    }

  }

  salvaEvento(evento) {
    this.calendar.createEvent(evento.title, evento.location, evento.notes, new Date(evento.startDate), new Date(evento.endDate.setHours(23,59))).then(
      (msg) => {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Event saved successfully',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      (err) => {
        let alert = this.alertCtrl.create({
          title: 'Failed!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

}

