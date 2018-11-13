import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { MuseiPage } from '../musei/musei';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-museo',
  templateUrl: 'museo.html',
})
export class MuseoPage {

  museo: any;
  classeMuseo: any;
  ultimo: string;
  unregisterBackButtonAction: any;
  museiTotali: any;
  classeAreaTotale: string;

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech, public nativePageTransitions: NativePageTransitions,
    public platform: Platform) {
    this.museo = this.navParams.get('musei');
    this.classeMuseo = this.navParams.get('classe1');
    this.museiTotali = this.navParams.get('museiTotali');
    this.classeAreaTotale = this.navParams.get('classeAreaTotale');
  }

  ionViewDidLoad() {
    var idClass = document.getElementById('paginaMuseo');
    idClass.classList.add(this.classeMuseo);
    var idCardDescrizione = document.getElementById('descrizione');
    idCardDescrizione.innerHTML = this.museo[0].DESCRIZIONE
    //calcolo altezza contenitore descrizione museo
    var idCardTitle = document.getElementById('museo_cardTitle');
    idCardDescrizione.style.height = idCardTitle.offsetHeight - idCardDescrizione.offsetTop+ "px";
    //Disabilito il menu principale e abilito quello specifico del museo
    this.menuCtrl.enable(false, "menuPrincipale");
    
    this.initializeBackButton();
  }
  
  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      if (this.museiTotali != undefined && this.classeAreaTotale != undefined) {
        this.navCtrl.push(MuseiPage, {musei: this.museiTotali, classe1: this.classeAreaTotale});
        this.navCtrl.removeView(this.navCtrl.last());
      } else {
        this.goHomePage();
      }
    });
  }

 //Apre il side menu
  openMenu() {
    let options : NativeTransitionOptions = {
      direction: 'right',
      duration: 600
    }
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(MenuPage, {datiMuseo: this.museo, museoClass: this.classeMuseo, ultimo: "MuseoService"}, {animate: true, direction: "back"});
    this.navCtrl.removeView(this.navCtrl.last());
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
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    //Riabilito il menu principale e disabilito quello specifico del museo
    this.menuCtrl.enable(true, "menuPrincipale");
  }

}
