import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform } from 'ionic-angular';
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
  classeArea: any;
  classMuseoArea: any;
  unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public museiService: RicercaMuseiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public platform: Platform) {
    this.musei = this.navParams.get('musei');
    this.classeArea = this.navParams.get('classe1');
  }

  //Richiama il metodo che recupera i dati del museo quando clicco sil div del museo
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
        if(this.classeArea === "area_artemoderna"){
          switch(string){
            case "MAMbo":
              this.classMuseoArea = "museo_mambo";
              break;
            default:
              this.classMuseoArea = string;
          }
        }
          this.navCtrl.push(MuseoPage, {musei: data, classe1: this.classMuseoArea, museiTotali: this.musei, classeAreaTotale: this.classeArea});
          this.navCtrl.removeView(this.navCtrl.last());
      }
    });
  }

  //evento che scatta al caricamento della pagina musei, serve a impostare le classi in modo dinamico nel css
  ionViewDidLoad() {
    var idClass = document.getElementById('paginaArea');
    idClass.classList.remove(this.classeArea);
    idClass.classList.add(this.classeArea);
    this.initializeBackButton();
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.goHomePage();
    });
  }

  //Associato al tasto per tornare all'home page.
  goHomePage() {
    this.navCtrl.push(HomePage);
    this.navCtrl.removeView(this.navCtrl.last());
    //Ho notato che ogni volta viene creata il tag di una pagina musei o museo. Bisogna gestire il fatto di utilizzare sempre e solo una pagina per area e museo, in modo da non creare n. pagine.
    //var idRemovePage = document.getElementById('paginaArea');
    //idRemovePage.parentNode.removeChild(idRemovePage);
  }

}
