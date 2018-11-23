import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, Slides  } from 'ionic-angular';
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

  //@ViewChild(Slides) slides: Slides;
  @ViewChildren(Slides) slides: QueryList<Slides>;

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
        let descrizionePercorsoArray = contentSlide.getElementsByTagName('P');
        let descrizionePercorso: any
        descrizionePercorso = descrizionePercorsoArray[0];
        console.log(descrizionePercorso, descrizionePercorso.offsetHeight);


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

  ionViewDidEnter(){
    let contenuto = document.getElementById('contenuto');
    let cardSlidesArray = contenuto.getElementsByTagName('ion-card');
    for (let i = 0; i < cardSlidesArray.length; i++){
      let cardSlide: any;
      cardSlide = cardSlidesArray[i];
      console.log(cardSlidesArray);
      console.log(cardSlide);
      let slidearray = cardSlide.getElementsByTagName('ion-slide');
      let slide: any;
      slide = slidearray[0];
      let h4Array = slide.getElementsByTagName('h4');
      let h4: any;
      h4 = h4Array[0];
      let h3Array;
      let h3;
      let h3OffsetHeight;

        h3Array = slide.getElementsByTagName('h3');
        h3 = h3Array[0];
        h3OffsetHeight = h3.offsetHeight + 4;

      let pArray = slide.getElementsByTagName('p');
      let p: any;
      p = pArray[0];
      let imgArray = slide.getElementsByTagName('img');
      let img: any;
      img = imgArray[0];
      // let imgSlideArray = idSlideCard.getElementsByTagName('IMG');
      // let imgSlide =
      //idSlideCard.style.height = 'auto';
      cardSlide.style.height = h4.offsetHeight + 14 + h3OffsetHeight + (p.offsetHeight>img.offsetHeight ? p.offsetHeight : img.offsetHeight) + 22 +'px';

    }

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

  //calcolo l'altezza della card in base alla lunghezza del contenuto
  slideChanged(indexSlider,SlideCard){

    let cardSliderArray = this.slides.toArray();
    let cardSlider = cardSliderArray[indexSlider];
    // console.log(indexSlider,SlideCard);
    // console.log("Slide numero:",cardSliderArray[indexSlider]);
    // console.log(this.slides);
    let idSlideCard = document.getElementById(SlideCard)
    //let currentIndex = this.slides[indexSlider].getActiveIndex();
    let currentIndex = cardSlider.getActiveIndex();
    // console.log(cardSlider._slides.length);
    // console.log(cardSlider.length);
    // console.log('Current index is', currentIndex);
    if(currentIndex != cardSlider._slides.length){
      let h4Array = idSlideCard.getElementsByTagName('h4');
      let h4: any;
      h4 = h4Array[currentIndex];
      let h3Array;
      let h3;
      let h3OffsetHeight;
      if (currentIndex == 0){
        h3Array = idSlideCard.getElementsByTagName('h3');
        h3 = h3Array[currentIndex];
        h3OffsetHeight = h3.offsetHeight + 4;
      }
      else{
        h3OffsetHeight = 0;
      }
      let pArray = idSlideCard.getElementsByTagName('p');
      let p: any;
      p = pArray[currentIndex];
      let imgArray = idSlideCard.getElementsByTagName('img');
      let img: any;
      img = imgArray[currentIndex];
      // let imgSlideArray = idSlideCard.getElementsByTagName('IMG');
      // let imgSlide =
      //idSlideCard.style.height = 'auto';
      idSlideCard.style.height = h4.offsetHeight + 14 + h3OffsetHeight + (p.offsetHeight>img.offsetHeight ? p.offsetHeight : img.offsetHeight) + 22 +'px';
      // console.log(idSlideCard.style.height);
    }





  }



  adjustSlideHeight(){

  }



}
