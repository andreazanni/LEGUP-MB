import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform  } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { MuseoPage } from '../museo/museo';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the MmPercorsiATemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mm-percorsi-a-tema',
  templateUrl: 'mm-percorsi-a-tema.html',
})
export class MmPercorsiATemaPage {
  myVoceMenu: string;
  myContenuto: string;
  myMuseoClass: string;
  myContentClass: string;
  myMuseo: any;
  unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech, public menuCtrl: MenuController, public nativePageTransitions: NativePageTransitions,
    public platform: Platform) {
    this.myVoceMenu = this.navParams.get('voceMenu');
    this.myContenuto = this.navParams.get('contenuto');
    this.myMuseoClass = this.navParams.get('museoClass');
    this.myContentClass = this.navParams.get('contenutoClass');
    this.myMuseo = this.navParams.get('datiMuseo');
  }

  ionViewDidLoad() {
     // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
     console.log(this.myContenuto);
     var idClass = document.getElementById('paginaMmPercorsiATema');
     idClass.classList.add(this.myMuseoClass);

     document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
     document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
     var idCardContenuto = document.getElementById('contenuto');

     var idContainerContenuto = document.getElementById('container-contenuto');
     var idContentHeader = document.getElementById('content-header');
     //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
     //lo scrolling su lato inferiore
     idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
     this.menuCtrl.enable(false, "menuPrincipale");
     this.initializeBackButton();

    // ciclo 10 percorsi all'intenro dei quali ciclo un massimo di 5 step, questo per andare a eliminare gli elementi della struttura base della pagina
    let nPercorso = 0;
    let arrayContenuto = []
    arrayContenuto = Array.from(this.myContenuto)
    while(nPercorso <= 9){
      let nSteps = 0;
      let idCard = document.getElementById('slideCard-' + nPercorso);
      //idCard.className = 'cardSlide'
      if(arrayContenuto[nPercorso]!= undefined){
        let idSlidePercorso = document.getElementById('slide-' + nPercorso + nSteps);
        let contentSlide = document.createElement('div');
        contentSlide.className = 'contentSlide';
        idSlidePercorso.appendChild(contentSlide);
        let titoloPercorso = document.createElement('h4');

        console.log(arrayContenuto[nPercorso]);
        console.log(nPercorso);
        titoloPercorso.textContent = arrayContenuto[nPercorso].TITOLO;

        contentSlide.appendChild(titoloPercorso);
        let sottoTitoloPercorso = document.createElement('h3');
        sottoTitoloPercorso.textContent = arrayContenuto[nPercorso].SOTTOTITOLO;
        contentSlide.appendChild(sottoTitoloPercorso);
        let immaginePercorso = document.createElement('img');
        immaginePercorso.src = arrayContenuto[nPercorso].IMMAGINE;
        contentSlide.appendChild(immaginePercorso);
        immaginePercorso.insertAdjacentHTML('afterend', arrayContenuto[nPercorso].DESCRIZIONE);

        //popolo le slide degli step di ogni percorso
        while(nSteps <= 3){
          let idSlideStep = document.getElementById('slide-' + nPercorso + (nSteps+1));
          console.log(document.getElementById('slide-' + nPercorso + (nSteps+1)))
          if(arrayContenuto[nPercorso].STEPS[nSteps]!= undefined){
            let contentStep = document.createElement('div');
            contentStep.className = 'contentSlide';
            idSlideStep.appendChild(contentStep);
            let titoloStep = document.createElement('h4');
            titoloStep.textContent = arrayContenuto[nPercorso].STEPS[nSteps].TITOLO;
            contentStep.appendChild(titoloStep);
            let immagineStep = document.createElement('img');
            immagineStep.src = arrayContenuto[nPercorso].STEPS[nSteps].IMMAGINE;
            contentStep.appendChild(immagineStep);
            immagineStep.insertAdjacentHTML('afterend', arrayContenuto[nPercorso].STEPS[nSteps].DESCRIZIONE);
          }
          else{
            idSlideStep.remove();
          }
          nSteps = nSteps + 1;
        }
      }
      else{
        idCard.remove();
      }
      nPercorso = nPercorso + 1;

    }

    // for (let i in this.myContenuto){

    //   let divSala = document.createElement('div')
    //   divSala.className = "sala"
    //   idCardContenuto.appendChild(divSala)
    //   let titoloSala = document.createElement('h4')
    //   titoloSala.textContent = this.myContenuto[i].NUMERO + " - " + this.myContenuto[i].NOME
    //   divSala.appendChild(titoloSala)
    //   let immagineSala = document.createElement('img')
    //   immagineSala.src = this.myContenuto[i].IMMAGINE
    //   divSala.appendChild(immagineSala)
    //   immagineSala.insertAdjacentHTML('afterend', this.myContenuto[i].DESCRIZIONE)
    // }
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.navCtrl.push(MuseoPage, {musei: this.myMuseo, classe1: this.myMuseoClass});
      this.navCtrl.removeView(this.navCtrl.last());
    });
  }

  //Apre il side menu
  openMenu() {
    let options : NativeTransitionOptions = {
      direction: 'right',
      duration: 600
    }
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(MenuPage, {datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "PercorsiATemaService"}, {animate: true, direction: "back"});
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
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    this.menuCtrl.enable(true, "menuPrincipale");
  }


}
