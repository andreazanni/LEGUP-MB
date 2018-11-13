import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Item, LoadingController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech, public menuCtrl: MenuController, public nativePageTransitions: NativePageTransitions, public loadingCtrl: LoadingController) {

    this.myVoceMenu = this.navParams.get('voceMenu');
    this.myContenuto = this.navParams.get('contenuto');
    this.myMuseoClass = this.navParams.get('museoClass');
    this.myContentClass = this.navParams.get('contenutoClass');
    this.myMuseo = this.navParams.get('datiMuseo');
  }

  ionViewDidLoad() {
     // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
     console.log(this.myContenuto);
     var idClass = document.getElementById('paginaMmEventi');
     idClass.classList.add(this.myMuseoClass);

     document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
     document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;

     var idCardContenuto = document.getElementById('contenuto');
     console.log(idCardContenuto);
     idCardContenuto.innerHTML = this.myContenuto;

     var idContainerContenuto = document.getElementById('container-contenuto');
     var idContentHeader = document.getElementById('content-header');
     //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
     //lo scrolling su lato inferiore
     idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
     console.log(idClass.offsetHeight);
     console.log(idContentHeader.offsetHeight);
     console.log(idContainerContenuto.style.height);

     this.menuCtrl.enable(false, "menuPrincipale");
     console.log(this.myVoceMenu);

    let spinnerLoading = this.loadingCtrl.create({
      });
    spinnerLoading.present();
     fetch("https://cors-anywhere.herokuapp.com/http://informa.comune.bologna.it/iperbole/rss/events/25")
      .then(response => {

        response.text().then((htmltxt) => {

          let contenutoEventi = document.getElementById('contenuto')
          var domParser = new DOMParser()
          let doc = domParser.parseFromString(htmltxt, 'text/html')
          doc.querySelectorAll('item').forEach((item) => {
            let divItem = document.createElement('div')
            divItem.className = 'itemFeed'
            contenutoEventi.appendChild(divItem)
            let titoloItem = document.createElement('h4')
            titoloItem.style.fontWeight = 'bold'
            divItem.appendChild(titoloItem)
            let testoTitolo = document.createTextNode(item.querySelector('title').textContent)
            titoloItem.appendChild(testoTitolo)
            let periodoItem = document.createElement('div')
            periodoItem.className = 'dateItem'
            divItem.appendChild(periodoItem)
            let dateItem = item.querySelector('pubdate').textContent + " - " + item.querySelector('pubenddate').textContent
            periodoItem.textContent = dateItem
            let descrizioneItem = document.createElement('p')
            divItem.appendChild(descrizioneItem)
            let stringaDescrizione = item.querySelector('description').textContent.split("<p>")
            let sottoStringaDescrizione = stringaDescrizione[1].split("</p>")
            let immagineItem = sottoStringaDescrizione[0]
            let testoDescrizione = document.createTextNode(sottoStringaDescrizione[1])
            periodoItem.insertAdjacentHTML('afterend',immagineItem)
            descrizioneItem.appendChild(testoDescrizione)

          })
        })
        spinnerLoading.dismiss();
      })
      .catch(error =>
        console.log("errorone"))


    // fetch('https://www.repubblica.it',{mode: 'no-cors'}).then((res) => {
    //   res.text().then((htmlTxt) => {
    //     console.log(htmlTxt)
    //     var domParser = new DOMParser()
    //     let doc = domParser.parseFromString(htmlTxt, 'text/html')
    //     var feedUrl = doc.querySelector('link[type="application/rss+xml"]')
    //     console.log(feedUrl)

    //   })
    // }).catch(() => console.error('Error in fetching the website'))


//  fetch('http://informa.comune.bologna.it/iperbole/rss/events/25', {mode: 'no-cors'}).then((res) => {
//       res.text().then((xmlTxt) => {
//         console.log(res);
//         var domParser = new DOMParser()
//         let doc = domParser.parseFromString(xmlTxt, 'text/html')
//         doc.querySelectorAll('item').forEach((item) => {
//            let h1 = document.createElement('h1')
//             h1.textContent = item.querySelector('title').textContent
//              //document.querySelector('output').appendChild(h1)
//              console.log(item.querySelector('title').textContent)
//              console.log(document.querySelector('output').appendChild(h1))
//            })
//          })
//     })



  }

  //Apre il side menu
  openMenu() {
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
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    this.menuCtrl.enable(true, "menuPrincipale");
  }

}