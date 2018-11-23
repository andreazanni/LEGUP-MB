import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { MuseoPage } from '../museo/museo';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-mm-come-raggiungerci',
  templateUrl: 'mm-come-raggiungerci.html',
})
export class MmComeRaggiungerciPage {

  myVoceMenu: string;
  myContenuto: string;
  myMuseoClass: string;
  myContentClass: string;
  myMuseo: any;
  unregisterBackButtonAction: any;
  alertAperti: boolean;
  alertAuthorized: any;
  alertEnabled: any;
  alertFinale: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech, public menuCtrl: MenuController, public nativePageTransitions: NativePageTransitions,
    public platform: Platform, public diagnostic: Diagnostic, public launchNavigator: LaunchNavigator, public alertCtrl: AlertController, public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {
    this.myVoceMenu = this.navParams.get('voceMenu');
    this.myContenuto = this.navParams.get('contenuto');
    this.myMuseoClass = this.navParams.get('museoClass');
    this.myContentClass = this.navParams.get('contenutoClass');
    this.myMuseo = this.navParams.get('datiMuseo');

    this.creaAlerts();
  }

  creaAlerts() {
    //Preparo tutti i popup da mostrare
    this.alertAuthorized = this.alertCtrl.create({
      title: "Si prega di autorizzare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.alertAperti = false;
            this.creaAlerts();
          }
        }
      ]
    });
    this.alertEnabled = this.alertCtrl.create({
      title: "Si prega di abilitare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.alertAperti = false;
            this.creaAlerts();
          }
        }
      ]
    });
    this.alertFinale = this.alertCtrl.create({
      title: "Purtroppo non sono riuscito a localizzare il tuo dispositivo.",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.alertAperti = false;
            this.creaAlerts();
          }
        }
      ]
    });  
  }

  ionViewDidLoad() {
     // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
     var idClass = document.getElementById('paginaMmComeRaggiungerci');
     idClass.classList.add(this.myMuseoClass);

     document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
     document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;

     var idCardContenuto = document.getElementById('contenuto');
     idCardContenuto.innerHTML = this.myContenuto;
     
     let divItem = document.createElement('div')
     divItem.className = 'contenuto';
     idCardContenuto.appendChild(divItem);
     divItem.appendChild(document.getElementById('descrizione-iniziale'));
     divItem.appendChild(document.getElementById('bottone'));
     divItem.appendChild(document.getElementById('descrizione-finale'));

     var idContainerContenuto = document.getElementById('container-contenuto');
     var idContentHeader = document.getElementById('content-header');
     //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
     //lo scrolling su lato inferiore
     idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";

     this.menuCtrl.enable(false, "menuPrincipale");
     this.initializeBackButton();
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      if (this.alertAperti) {
        this.alertAuthorized.dismiss();
        this.alertEnabled.dismiss();
        this.alertFinale.dismiss();
        this.alertAperti = false;
        this.creaAlerts();
      } else {
        this.navCtrl.push(MuseoPage, {musei: this.myMuseo, classe1: this.myMuseoClass});
        this.navCtrl.removeView(this.navCtrl.last());
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
    this.navCtrl.push(MenuPage, {datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "IndicazioniService"}, {animate: true, direction: "back"});
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

  //Metodo chiamato dal pulsante che va ad aprire l'app di navigazione
  calcolaPercorso() {
    //Parte un loader per mascherare il calcolo in background del museo piu vicino
    let spinnerLoading = this.loadingCtrl.create();
    spinnerLoading.present(); 
    //Per prima cosa controllo se è stata autorizzata la localizzazione
    this.diagnostic.isLocationAuthorized().then(() => {
    //Poi controllo se la localizzazione è abilitata
    this.diagnostic.isLocationEnabled().then((response) => {
      if (response) {
        //Rilevo la posizione e do 20 secondi di tempo per farcela
        this.geolocation.getCurrentPosition({timeout: 20000}).then((resp) => {
          spinnerLoading.dismiss();
            let destination = [this.myMuseo[0].LATITUDINE, this.myMuseo[0].LONGITUDINE];
            let options: LaunchNavigatorOptions = {
              start: [resp.coords.latitude, resp.coords.longitude],
              transportMode: "walking",
              appSelection: {
                dialogHeaderText: "Seleziona l'app che preferisci utilizzare.",
                cancelButtonText: "Ritorna all'applicazione.",
                rememberChoice: {
                  prompt: {
                    headerText: "Ricorda questa scelta",
                    bodyText: "Desideri utilizzare sempre questa app?",
                    yesButtonText: "SI'",
                    noButtonText: "NO"
                  }
                }
              },
            }

            //Avvio l'app di calcolo percorso
            this.launchNavigator.navigate(destination, options)
            .then()
            .catch(() => {
              this.alertFinale.present();
              this.alertFinale.onDidDismiss(() => {
                this.creaAlerts();
              })
              this.alertAperti = true;
            });
          }).catch(() => {
            spinnerLoading.dismiss();
            this.alertFinale.present();
            this.alertFinale.onDidDismiss(() => {
              this.creaAlerts();
            });
            this.alertAperti = true;
        });
      } else {
        spinnerLoading.dismiss();
        this.alertEnabled.present();
        this.alertEnabled.onDidDismiss(() => {
          this.creaAlerts();
        });
        this.alertAperti = true;
      }
    }).catch(() => {
      spinnerLoading.dismiss();
      this.alertEnabled.present();
      this.alertEnabled.onDidDismiss(() => {
        this.creaAlerts();
      });
      this.alertAperti = true;
    });
  }).catch(() => {
    spinnerLoading.dismiss();
    this.alertAuthorized.present();
    this.alertAuthorized.onDidDismiss(() => {
      this.creaAlerts();
    });
    this.alertAperti = true;
  });
}

}
