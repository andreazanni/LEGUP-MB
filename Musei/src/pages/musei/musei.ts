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
  classeArea: any;
  classMuseoArea: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public museiService: RicercaMuseiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
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
          this.navCtrl.push(MuseoPage, {musei: data, classe1: this.classMuseoArea});
          console.log(this.classMuseoArea);
      }
    });
  }

  //evento che scatta al caricamento della pagina musei, serve a impostare le classi in modo dinamico nel css
  ionViewDidLoad() {
    console.log(this.classeArea);
    var idClass = document.getElementById('paginaArea');
    console.log(idClass.classList.contains(this.classeArea));
    idClass.classList.add(this.classeArea);
    console.log(idClass.classList.contains(this.classeArea));
  }

  //Associato al tasto per tornare all'home page.
  goHomePage() {
  	this.navCtrl.push(HomePage);
    //Ho notato che ogni volta viene creata il tag di una pagina musei o museo. Bisogna gestire il fatto di utilizzare sempre e solo una pagina per area e museo, in modo da non creare n. pagine.
    //var idRemovePage = document.getElementById('paginaArea');
    //idRemovePage.parentNode.removeChild(idRemovePage);
  }

}
