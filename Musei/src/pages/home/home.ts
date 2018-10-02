import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController} from 'ionic-angular';
import { MuseiPage } from '../musei/musei';
import { MuseoPage } from '../museo/museo';
import { RicercaMuseiProvider } from '../../providers/ricerca-musei/ricerca-musei';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public museiService: RicercaMuseiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  AREA: any;
  NOME: any;

  classArea: any;
  classMuseo: any;

  //Richiama il metodo che restituisce i musei associati ad un'area
  findMusei(string) {
    let loading = this.loadingCtrl.create({
      content: "Caricamento musei..."
    });

    loading.present();

    let options = {
      AREA: string
    };

    this.museiService.startRicercaMusei(options).then((data) => {
      loading.dismiss();

      if(typeof(data[0]) === "undefined") {
        let alert = this.alertCtrl.create({
          title: 'Errore imprevisto!',
          buttons: ['OK']
        });

        alert.present();
      } else {
          //Se ho soltanto un dato in posizione 0 vado alla pagina del museo direttamente perche' ho un solo museo trovato
          if(typeof(data[1]) === "undefined") {
          switch(string){
            case "Archeologia":
              this.classMuseo = "museo_archeologia";
              break;
            default:
              this.classMuseo = string;
          }
            this.navCtrl.push(MuseoPage, {musei: data, classe1: this.classMuseo});
            console.log(this.classMuseo);

          } else {
            //Altrimenti vado alla pagina dei musei
            switch(string){
              case "Arte moderna e contemporanea":
                this.classArea = "area_artemoderna";
                break;
              default:
                this.classArea = string;
            }
            this.navCtrl.push(MuseiPage, {musei: data, classe1: this.classArea});
            console.log(this.classArea);
          }
      }
    });
  }
}
