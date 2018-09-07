import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MuseoPage } from '../museo/museo';
import { RicercaMuseiProvider } from '../../providers/ricerca-musei/ricerca-musei';

@IonicPage()
@Component({
  selector: 'page-musei',
  templateUrl: 'musei.html',
})
export class MuseiPage {
  
  NOME: any;
  musei: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public museiService: RicercaMuseiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.musei = this.navParams.get('musei');
  }

  findMuseo(string) {
    let loading = this.loadingCtrl.create({
      content: "Caricamento dati museo..."
    });

    loading.present();
    let options = {
      NOME: string
    };

    this.museiService.getDatiMusei(options).then((data) => {
      loading.dismiss();

      if(typeof(data[0]) === "undefined") {
        let alert = this.alertCtrl.create({
          title: 'Errore imprevisto!',
          buttons: ['OK']
        });

        alert.present();
      } else {
          this.navCtrl.push(MuseoPage, {musei: data});
      }
    });
  }
  
  goHomePage() {
  	this.navCtrl.push(HomePage);
  }

}
