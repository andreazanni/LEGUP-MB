import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-museo',
  templateUrl: 'museo.html',
})
export class MuseoPage {

  museo: any;
  classeMuseo: any;

  constructor(public menuCtrl: MenuController, public nav: NavController, public navParams: NavParams, public tts: TextToSpeech) {
    this.museo = this.navParams.get('musei');
    this.classeMuseo = this.navParams.get('classe1');
  }

  ionViewDidLoad() {
    var idClass = document.getElementById('paginaMuseo');
    idClass.classList.add(this.classeMuseo);
    var idCardDescrizione = document.getElementById('descrizione');
    idCardDescrizione.innerHTML = this.museo[0].DESCRIZIONE
    //calcolo altezza contenitore descrizione museo
    var idCardTitle = document.getElementById('museo_cardTitle');
    var descrizioneHeight = idCardTitle.offsetHeight - idCardDescrizione.offsetTop;
    idCardDescrizione.style.height = descrizioneHeight + "px";
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
}
