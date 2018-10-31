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
    for ( let i=0; i < this.navCtrl.length(); i++ )
      {
          let v = this.navCtrl.getViews()[i];
          console.log(v.component.name);

      }
  }

  AREA: any;
  NOME: any;

  classArea: any;
  classMuseo: any;
  //Richiama il metodo che restituisce i musei associati ad un'area
  findMusei(string, isActive) {
    console.log(isActive);
    if (isActive==false){
      let alertNotActive = this.alertCtrl.create({
        title: 'Coming soon...',
        buttons: ['OK']
      });
      alertNotActive.present();
    } else {
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
              this.navCtrl.push(MuseoPage, {musei: data, classe1: this.classMuseo});
              console.log(this.classMuseo);
            } else {
              //Altrimenti vado alla pagina dei musei dell'Area. Assegno le classi per area con nomenclatura "area_abbreviazionenomearea"
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
}
