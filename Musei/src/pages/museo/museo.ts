import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Events} from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
import { ContentPage } from '../content/content';

@IonicPage()
@Component({
  selector: 'page-museo',
  templateUrl: 'museo.html',
})
export class MuseoPage {

  museo: any;
  classeMuseo: any;

  constructor(public menuCtrl: MenuController, public nav: NavController, public navParams: NavParams, public tts: TextToSpeech, public events: Events) {
    this.museo = this.navParams.get('musei');
    this.classeMuseo = this.navParams.get('classe1');
    this.events.subscribe('info', (data)=> {
      console.log(this.museo[0].INFO);
      this.openInfo('info', this.museo[0].INFO);
    });

    this.events.subscribe('orari', (data)=> {
      console.log(this.museo[0].ORARI);
      this.openInfo('orari', this.museo[0].ORARI);
    });

    this.events.subscribe('biglietti', (data)=> {
      console.log(this.museo[0].BIGLIETTI);
      this.openInfo('biglietti', this.museo[0].BIGLIETTI);
    });
  }

  ionViewDidLoad() {
    console.log('inizializzo la pagina MUSEO');
    var idClass = document.getElementById('paginaMuseo');
    idClass.classList.add(this.classeMuseo);
    var idCardDescrizione = document.getElementById('descrizione');
    idCardDescrizione.innerHTML = this.museo[0].DESCRIZIONE
    //calcolo altezza contenitore descrizione museo
    var idCardTitle = document.getElementById('museo_cardTitle');
    idCardDescrizione.style.height = idCardTitle.offsetHeight - idCardDescrizione.offsetTop+ "px";
    //console.log(idCardTitle.offsetTop, idCardTitle.offsetHeight);
    //Disabilito il menu principale e abilito quello specifico del museo
    this.menuCtrl.enable(false, "menuPrincipale");
    this.menuCtrl.enable(true, "menuMuseo");

  }


 //Apre il side menu
  openMenu() {
    this.menuCtrl.open("menuMuseo");
 }

  read() {
    this.tts.speak({text: document.getElementById("museoDescrizione").innerText, locale: 'it-IT', rate: 0.88});
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
    this.nav.push(HomePage);
    this.nav.removeView(this.nav.last());
    //Riabilito il menu principale e disabilito quello specifico del museo
    this.menuCtrl.enable(true, "menuPrincipale");
    this.menuCtrl.enable(false, "menuMuseo");
  }

  openInfo(servizio: string, content: string){
    console.log(content);
    console.log(this.classeMuseo);
    this.menuCtrl.close("menuMuseo");
    switch (servizio){
      case 'info':
      this.nav.push(ContentPage, {voceMenu: 'INFORMAZIONI', contenuto: content, museoClass: this.classeMuseo, contentClass: 'content_informazioni'});
      break;

      case 'orari':
      this.nav.push(ContentPage, {voceMenu: 'ORARI', contenuto: content, museoClass: this.classeMuseo, contentClass: 'content_orari'});
      break;

      case 'biglietti':
      this.nav.push(ContentPage, {voceMenu: 'BIGLIETTI', contenuto: content, museoClass: this.classeMuseo, contentClass: 'content_biglietti'});
      break;

      default:
      break;
    }
    this.nav.removeView(this.nav.last());
    this.events.unsubscribe(servizio);
    //console.log(this.nav.last());
  }
}
