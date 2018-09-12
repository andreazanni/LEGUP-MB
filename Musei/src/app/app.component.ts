import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  page: any;

  constructor(public socialSharing: SocialSharing, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController, public menuCtrl: MenuController) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      
	  let splash = modalCtrl.create(Splash);
	  splash.present();
	  
	  //splashScreen.hide();
    });
  }

  onLoad(string) {
    console.log(string);

    if(string == "Social") {
      this.socialSharing.canShareVia("instagram").then(() => {
       this.socialSharing.shareViaInstagram("Museo Archeologia", null);
        //this.page = HomePage;
        //this.nav.push(this.page);
      }).catch((err) => {
        alert(err);
      });

    }    

    this.menuCtrl.close();
  }
}

