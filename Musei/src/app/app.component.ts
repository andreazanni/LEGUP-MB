import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, MenuController, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  page: any;

  constructor(public socialSharing: SocialSharing, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController, public menuCtrl: MenuController, 
  public events: Events, public diagnostic: Diagnostic, public geolocation: Geolocation,) {
      platform.ready().then(() => {

      statusBar.styleDefault();
      
	  let splash = modalCtrl.create(Splash);
	  splash.present();
	  
	  //splashScreen.hide();
    });
  }

  onLoad(service: string) {
    console.log(service);

    switch(service) {
      case "SocialService":
        this.socialSharing.canShareVia("instagram").then(() => {
          this.socialSharing.shareViaInstagram("Museo Archeologia", null);
        }).catch((err) => {
          alert("Errore! Non sono riuscito a connettermi con il social.");
          });
        break;
      
      case "InformazioniService":
        this.events.publish('info');
        break;
      
      case "OrariService":
        this.events.publish('orari');
        break;

      case "BigliettiService":
        this.events.publish('biglietti');
        break;

      case "MuseoPiuVicinoService":
      this.diagnostic.isLocationAvailable().then((success) => {
        alert("Location: " + success);
      }).catch((error) => {
        alert(error);
      });


      this.geolocation.getCurrentPosition().then((resp) => {
        console.log("Longitudine: " + resp.coords.longitude + " Latitudine: " + resp.coords.latitude);
        var distance = this.calculateDistance(resp.coords.latitude, resp.coords.longitude) ;
        //alert("Distanza: " + distance);
       }).catch((error) => {
         alert('Errore! Non sono riuscito a recuperare la posizione attuale');
       });
        break;
      
        default:
        break;
    } 
    this.menuCtrl.close();
  }

  calculateDistance(latitudineIniziale: any, longitudineIniziale: any): any {
    //var musei = [[44.5042144, 11.3442351], [44.4947301, 11.3443067]]
    var musei: any = [{
      "museo" : "Stazione", 
      "latitudine" : "44.5042144",
      "longitudine": "11.3442351"
      },
      {
      "museo" : "Apple Store", 
      "latitudine" : "44.4947301",
      "longitudine": "11.3443067"
      }];
    
    var R = 6371e3; // metres
    var distanzaMinore = 0;
    var museo;

    for (var key in musei) {
      var φ1 = this.toRad(latitudineIniziale);
      var φ2 = this.toRad(musei[key].latitudine);
      var Δφ = this.toRad(musei[key].latitudine-latitudineIniziale);
      var Δλ = this.toRad(musei[key].longitudine-longitudineIniziale);
  
      var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
      var d = R * c;

      if(d < distanzaMinore || distanzaMinore === 0) {
        distanzaMinore = d;
        museo = musei[key].museo;
      }

    }

    //alert("Meglio andare a: " + museo);
    //return d;
  }

  toRad(Value) {
    return Value * Math.PI / 180;
}
}

