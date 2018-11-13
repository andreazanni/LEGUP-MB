import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, MenuController, Nav, AlertController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { RicercaMuseiProvider } from '../providers/ricerca-musei/ricerca-musei';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  page: any;
  geoMusei: any;

  constructor(public socialSharing: SocialSharing, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController, public menuCtrl: MenuController, 
  public diagnostic: Diagnostic, public geolocation: Geolocation, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public museiService: RicercaMuseiProvider) {

      platform.ready().then(() => {
        statusBar.styleDefault();
	      let splash = modalCtrl.create(Splash);
	      splash.present();
        //splashScreen.hide();
      });

      //Carico già all'avvio dell'app le geolocalizzazioni dei musei
      this.museiService.getGeolocalizzazioni().then((data) => {
        this.geoMusei = data;
      })
  }

  onLoad(service: string) {

    switch(service) {
      case "SocialService":
        this.socialSharing.canShareVia("instagram").then(() => {
          this.socialSharing.shareViaInstagram("Museo Archeologia", null);
        }).catch((err) => {
          alert("Errore! Non sono riuscito a connettermi con il social.");
          });
        break;

      case "MuseoPiuVicinoService":
        //Parte un loader per mascherare il calcolo in background del museo piu vicino
        let spinnerLoading = this.loadingCtrl.create();
        spinnerLoading.present();
        //Preparo tutti i popup da mostrare
        let alertAuthorized = this.alertCtrl.create({
          title: "Si prega di autorizzare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
          buttons: ['OK']
        });
        let alertEnabled = this.alertCtrl.create({
          title: "Si prega di abilitare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
          buttons: ['OK']
        });
        let alertFinale = this.alertCtrl.create({
          title: "Purtroppo non sono riuscito a localizzare il tuo dispositivo.",
          buttons: ['OK']
        });
        //Per prima cosa controllo se è stata autorizzata la localizzazione
        this.diagnostic.isLocationAuthorized().then(() => {
          //Poi controllo se la localizzazione è abilitata
          this.diagnostic.isLocationEnabled().then((response) => {
            if (response) {
              //Rilevo la posizione e do 20 secondi di tempo per farcela
              this.geolocation.getCurrentPosition({timeout: 20000}).then((resp) => {
                spinnerLoading.dismiss();
                //Richiamo il metodo che date le mie coordinate va a trovare il museo piu vicino
                this.calculateDistance(resp.coords.latitude, resp.coords.longitude);
                }).catch(() => {
                  spinnerLoading.dismiss();
                  alertFinale.present();
              });
            } else {
              spinnerLoading.dismiss();
              alertEnabled.present();
            }
          }).catch(() => {
            spinnerLoading.dismiss();
            alertEnabled.present();
          });
        }).catch(() => {
          spinnerLoading.dismiss();
          alertAuthorized.present();
        });
        break;
      
        default:
        break;
    } 
    this.menuCtrl.close();
  }

  calculateDistance(latitudineIniziale: any, longitudineIniziale: any) {
    
    var R = 6371e3; // metres
    var distanzaMinore = 0;
    var museoPiuVicino;

    for (var key in this.geoMusei) {
      var φ1 = this.toRad(latitudineIniziale);
      var φ2 = this.toRad(this.geoMusei[key].LATITUDINE);
      var Δφ = this.toRad(this.geoMusei[key].LATITUDINE-latitudineIniziale);
      var Δλ = this.toRad(this.geoMusei[key].LONGITUDINE-longitudineIniziale);
  
      var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
      var d = R * c;

      //Mi salvo la distanza minore del museo
      if(d < distanzaMinore || distanzaMinore === 0) {
        distanzaMinore = d;
        museoPiuVicino = this.geoMusei[key].MUSEO;
      }
    }

    //Mostro il museo piu vicino e la relativa distanza
    let alertDistanza = this.alertCtrl.create({
      title: "Il museo più vicino a te è il " + museoPiuVicino + " e dista circa " + Math.floor(distanzaMinore) + " metri.",
      buttons: ['OK']
    });
    alertDistanza.present();
  
  }

  toRad(Value) {
    return Value * Math.PI / 180;
  }
}

