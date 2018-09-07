import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MuseoPage } from '../museo/museo';
import { RicercaMuseiProvider } from '../../providers/ricerca-musei/ricerca-musei';

/**
 * Generated class for the MuseiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musei',
  templateUrl: 'musei.html',
})
export class MuseiPage {

  TIPO: any;
  NOME: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public museiService: RicercaMuseiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  findMusei() {
    let loading = this.loadingCtrl.create({
      content: "Finding museum..."
    });

    loading.present();

    let options = {
      TIPO: "Archeologia",
      NOME: "Museo arte antica"
    };

    this.museiService.getRicercaMusei(options).then((data) => {
      loading.dismiss();

      if(typeof(data[0]) === "undefined") {
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          buttons: ['OK']
        });

        alert.present();
        console.log("Data: " + data);
        console.log("Opzioni: " + options);
      } else {
          this.goMuseoPage();
          console.log('volo');
      }
    });
  }
  
  goHomePage() {
  	this.navCtrl.push(HomePage);
  }
  
  goMuseoPage() {
  	this.navCtrl.push(MuseoPage);
  }

}
