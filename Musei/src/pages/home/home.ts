import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { MuseiPage } from '../musei/musei';
import { MuseoPage } from '../museo/museo';
import { RicercaMuseiProvider } from '../../providers/ricerca-musei/ricerca-musei';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public museiService: RicercaMuseiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public platform: Platform,
    public tts: TextToSpeech) {
    /*for ( let i=0; i < this.navCtrl.length(); i++ )
      {
          let v = this.navCtrl.getViews()[i];
          //console.log("Componente Home: " + v.component.name);

      }*/
      this.creaAlert();


    this.alertNotActive.onDidDismiss(() => {
      this.creaAlert();
    })
  }

  AREA: any;
  NOME: any;

  unregisterBackButtonAction: any;
  classArea: any;
  classMuseo: any;
  alertNotActive: any;
  alertAperto: boolean;

  creaAlert() {
    this.alertNotActive = this.alertCtrl.create({
      title: 'Coming soon...',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.alertAperto = false;
            this.creaAlert();
          }
        }
      ]
    });
  }

  ionViewDidLoad() {
    this.initializeBackButton();
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      if (this.alertAperto) {
        this.alertAperto = false;
        this.alertNotActive.dismiss();
        this.creaAlert();
      } else {
        this.tts.speak("");
        this.platform.exitApp();
      }
    });
  }

  //Richiama il metodo che restituisce i musei associati ad un'area
  findMusei(string, isActive) {
    if (isActive==false){
      this.alertNotActive.present();
      this.alertNotActive.onDidDismiss(() => {
        this.creaAlert();
      })
      this.alertAperto = true;
    } else {
      this.alertAperto = false;
      //spinner loading
      let spinnerLoading = this.loadingCtrl.create({
        dismissOnPageChange: true
      });
      spinnerLoading.present();
      let options = {
        AREA: string
      };

      this.museiService.startRicercaMusei(options).then((data) => {
        if(typeof(data[0]) === "undefined") {
          spinnerLoading.dismiss();
          //se non ho dati faccio dismiss dello spinner e lancio il messaggio di errore
          let alert = this.alertCtrl.create({
            title: 'Errore imprevisto!',
            buttons: ['OK']
          });
          alert.present();
        } else {
            //Se ho soltanto un dato in posizione 0 vado alla pagina del museo direttamente perche' ho un solo museo trovato. Assegno le classi per museo con nomenclatura "museo_abbreviazionenomemuseo"
            if(typeof(data[1]) === "undefined") {
            switch(string){
            /*
                case "Archeologia":
                this.classMuseo = "museo_archeologia";
                isActive = true;
                break;
             */
              case "Musica":
                this.classMuseo = "museo_musica";
                break;
              default:
                this.classMuseo = string;
            }
              this.tts.speak("");
              this.navCtrl.push(MuseoPage, {musei: data, classe1: this.classMuseo});
              this.navCtrl.removeView(this.navCtrl.last());
            } else {
              //Altrimenti vado alla pagina dei musei dell'Area. Assegno le classi per area con nomenclatura "area_abbreviazionenomearea"
              switch(string){
                case "Arte moderna e contemporanea":
                  this.classArea = "area_artemoderna";
                  break;
                default:
                  this.classArea = string;
              }
                this.tts.speak("");
                this.navCtrl.push(MuseiPage, {musei: data, classe1: this.classArea});
                this.navCtrl.removeView(this.navCtrl.last());
                console.log(this.classArea);
            }
        }
      });
    }
  }
}
