import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, AlertController  } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { MuseoPage } from '../museo/museo';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Instagram } from '@ionic-native/instagram';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Market } from '@ionic-native/market';

/**
 * Generated class for the MmCondivisioneSocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mm-condivisione-social',
  templateUrl: 'mm-condivisione-social.html',
})
export class MmCondivisioneSocialPage {

  myVoceMenu: string;
  myContenuto: string;
  myMuseoClass: string;
  myContentClass: string;
  myMuseo: any;
  unregisterBackButtonAction: any;
  alertTwitter: any;
  alertFacebook: any;
  alertAperti: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tts: TextToSpeech, public menuCtrl: MenuController, public nativePageTransitions: NativePageTransitions,
    public platform: Platform, public camera: Camera, public instagramSocial: Instagram, public socialSharing: SocialSharing, public alertCtrl: AlertController, public market: Market) {
    this.myVoceMenu = this.navParams.get('voceMenu');
    this.myContenuto = this.navParams.get('contenuto');
    this.myMuseoClass = this.navParams.get('museoClass');
    this.myContentClass = this.navParams.get('contenutoClass');
    this.myMuseo = this.navParams.get('datiMuseo');
    
    this.creaAlerts();
  }

  creaAlerts() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.alertTwitter = this.alertCtrl.create({
      title: "Vuoi anche scattare una foto e condividerla su Twitter?",
      buttons: [
        {
          text: "VAI DIRETTAMENTE SU TWITTER",
          handler: () => {
            this.alertAperti = false;
            this.creaAlerts();
            this.socialSharing.shareViaTwitter("")
            .catch((err) => {
              alert(err);
            })
          }
        },
        {
          text: "SCATTA FOTO",
          handler: () => {
            this.alertAperti = false;
            this.creaAlerts();
            this.camera.getPicture(options).then((imageData) => {
              let base64Image = 'data:image/jpeg;base64,' + imageData;
              this.socialSharing.shareViaTwitter("", base64Image)
              .catch((err) => {
                alert(err);
              })
            });
          }
        },
      ]
    });

    this.alertFacebook = this.alertCtrl.create({
      title: "Vuoi anche scattare una foto e condividerla su Facebook?",
      buttons: [
        {
          text: "VAI DIRETTAMENTE SU FACEBOOK",
          handler: () => {
            this.alertAperti = false;
            this.creaAlerts();
              this.socialSharing.shareViaFacebook("")
              .catch((err) => {
                alert(err);
              })
          }
        },
        {
          text: "SCATTA FOTO",
          handler: () => {
            this.alertAperti = false;
            this.creaAlerts();
            this.camera.getPicture(options).then((imageData) => {
              let base64Image = 'data:image/jpeg;base64,' + imageData;
              this.socialSharing.shareViaFacebook("", base64Image)
              .catch((err) => {
                alert(err);
              })
            });
          }
        },
      ]
    });
  }

  ionViewDidLoad() {
     // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
     var idClass = document.getElementById('paginaMmCondivisioneSocial');
     idClass.classList.add(this.myMuseoClass);

     document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
     document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;

     var idCardContenuto = document.getElementById('contenuto');
     let divItem = document.createElement('div')
     divItem.className = 'contenuto';
     idCardContenuto.appendChild(divItem);
     
    //Instagram
    this.instagramSocial.isInstalled().then((response) => {
      if(response) {
        divItem.appendChild(document.getElementById('bottone-instagram'));
        document.getElementById('bottone-installa-instagram').remove();
      } else {
        divItem.appendChild(document.getElementById('bottone-installa-instagram'));
        document.getElementById('bottone-instagram').remove();
      }
    }).then(() => {
      //Facebook
      let app = 'facebook';
      if(this.platform.is('ios')) {
        app = 'com.apple.social.' + app;
      }
      this.socialSharing.canShareVia(app).then(() => {
        divItem.appendChild(document.getElementById('bottone-facebook'));
        document.getElementById('bottone-installa-facebook').remove();
      }).catch(() => {
        divItem.appendChild(document.getElementById('bottone-installa-facebook'));
        document.getElementById('bottone-facebook').remove();
      }).then(() => {
        //Twitter
        let app = 'twitter';
        if(this.platform.is('ios')) {
          app = 'com.apple.social.' + app;
        }
        this.socialSharing.canShareVia(app).then(() => {
          divItem.appendChild(document.getElementById('bottone-twitter'));
          document.getElementById('bottone-installa-twitter').remove();
        }).catch(() => {
          divItem.appendChild(document.getElementById('bottone-installa-twitter'));
          document.getElementById('bottone-twitter').remove();
        }).then(() => {
          //Se sono su tablet o iPad non mostro whatsapp
          if(this.platform.is('tablet') || this.platform.is('ipad')) {
            document.getElementById('bottone-installa-whatsapp').remove();
            document.getElementById('bottone-whatsapp').remove();
          } else {
            //WHatsapp
            let app = 'whatsapp';
            if(this.platform.is('ios')) {
              app = 'com.apple.social.' + app;
            }
            this.socialSharing.canShareVia(app).then(() => {
              divItem.appendChild(document.getElementById('bottone-whatsapp'));
              document.getElementById('bottone-installa-whatsapp').remove();
          }).catch(() => {
            divItem.appendChild(document.getElementById('bottone-installa-whatsapp'));
            document.getElementById('bottone-whatsapp').remove();
            });
          }
        });
      });
    });

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
        this.alertFacebook.dismiss();
        this.alertTwitter.dismiss();
        this.alertAperti = false;
        this.creaAlerts();
      } else {
        this.stopRead();
        this.navCtrl.push(MuseoPage, {musei: this.myMuseo, classe1: this.myMuseoClass});
        this.navCtrl.removeView(this.navCtrl.last());
      }
    });
  }

  //Apre il side menu
  openMenu() {
    this.stopRead();
    let options : NativeTransitionOptions = {
      direction: 'right',
      duration: 600
    }
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(MenuPage, {datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "SocialService"}, {animate: true, direction: "back"});
    this.navCtrl.removeView(this.navCtrl.last());
 }

  read() {
    this.tts.speak({text: document.getElementById("card-contenuto").innerText, locale: 'it-IT', rate: 0.88});
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
    this.stopRead();
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    this.menuCtrl.enable(true, "menuPrincipale");
  }

  instagram() {
    this.stopRead();
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.instagramSocial.share(base64Image);
    });
  }

  facebook() {
    this.stopRead();
    this.alertFacebook.present();
    this.alertFacebook.onDidDismiss(() => {
      this.creaAlerts();
    });
    this.alertAperti = true;
  }

  twitter() {
    this.stopRead();
    this.alertTwitter.present();
    this.alertTwitter.onDidDismiss(() => {
      this.creaAlerts();
    });
    this.alertAperti = true;
  }

  whatsapp() {
    this.stopRead();
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.socialSharing.shareViaWhatsApp("", base64Image)
      .catch((err) => {
        alert(err);
      })
    });
  }

  installaWhatsapp() {
    this.stopRead();
    if(this.platform.is('ios')) {
      this.market.open('id310633997');
    } else {
      this.market.open('com.whatsapp');
    }
  }

  installaFacebook() {
    this.stopRead();
    if(this.platform.is('ios')) {
      this.market.open('id284882215');
    } else {
      this.market.open('com.facebook.katana');
    }
  }

  installaTwitter() {
    this.stopRead();
    if(this.platform.is('ios')) {
      this.market.open('id333903271');
    } else {
      this.market.open('com.twitter.android');
    }
  }

  installaInstagram() {
    this.stopRead();
    if(this.platform.is('ios')) {
      this.market.open('id389801252');
    } else {
      this.market.open('com.instagram.android');
    }
  }
}
