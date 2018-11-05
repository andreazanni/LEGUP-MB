import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
/**
 * Generated class for the MmInformazioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mm-informazioni',
  templateUrl: 'mm-informazioni.html',
})
export class MmInformazioniPage {

  myVoceMenu: string;
  myContenuto: string;
  myMuseoClass: string;
  myContentClass: string;
  myNomeMuseo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech, public menuCtrl: MenuController) {
    this.myVoceMenu = this.navParams.get('voceMenu');
    this.myContenuto = this.navParams.get('contenuto');
    this.myMuseoClass = this.navParams.get('museoClass');
    this.myContentClass = this.navParams.get('contenutoClass');
    this.myNomeMuseo = this.navParams.get('nomeMuseo');
  }

  ionViewDidLoad() {
     // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
     console.log(this.myContenuto);
     console.log(this.myNomeMuseo);
     var idClass = document.getElementById('paginaMmInformazioni');
     idClass.classList.add(this.myMuseoClass);

     document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
     document.getElementById('content_cardSubTitle').innerText = this.myNomeMuseo;

     var idCardContenuto = document.getElementById('contenuto');
     console.log(idCardContenuto);
     idCardContenuto.innerHTML = this.myContenuto;

     var idContainerContenuto = document.getElementById('container-contenuto');
     var idContentHeader = document.getElementById('content-header');
     var idContainerContent = document.getElementById('container-content');
     //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
     //lo scrolling su lato inferiore
     idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
     console.log(idClass.offsetHeight);
     console.log(idContentHeader.offsetHeight);
     console.log(idContainerContenuto.style.height);

     this.menuCtrl.enable(false, "menuPrincipale");
     this.menuCtrl.enable(true, "menuMuseo");
     console.log(this.myVoceMenu);


     fetch('http://informa.comune.bologna.it/iperbole/rss/events/25', {mode: 'no-cors'}).then((res) => {
      res.text().then((xmlTxt) => {
        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/html')
        doc.querySelectorAll('item').forEach((item) => {
           let h1 = document.createElement('h1')
            h1.textContent = item.querySelector('title').textContent
             document.querySelector('output').appendChild(h1)
             console.log(item.querySelector('title').textContent)
             //console.log(document.querySelector('output').appendChild(h1))
           })
         })
    })

  }

  //Apre il side menu
  openMenu() {
    this.menuCtrl.open("menuMuseo");
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
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    //Riabilito il menu principale e disabilito quello specifico del museo
    this.menuCtrl.enable(true, "menuPrincipale");
    this.menuCtrl.enable(false, "menuMuseo");
  }

}
