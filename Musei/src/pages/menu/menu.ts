import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MmInformazioniPage } from '../mm-informazioni/mm-informazioni';
import { MmOrariPage } from '../mm-orari/mm-orari';
import { MmBigliettiPage } from '../mm-biglietti/mm-biglietti';
import { MmIlPalazzoPage } from '../mm-il-palazzo/mm-il-palazzo';
import { MmLeCollezioniPage } from '../mm-le-collezioni/mm-le-collezioni';
import { MmLaBibliotecaPage } from '../mm-la-biblioteca/mm-la-biblioteca';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  museo: any;
  classe: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.museo = this.navParams.get('datiMuseo');
    this.classe = this.navParams.get('museoClass');
  }

  onLoad(service: string) {

    switch(service) {
      
      case "InformazioniService":
        this.navCtrl.setRoot(MmInformazioniPage, {datiMuseo: this.museo, voceMenu: 'INFORMAZIONI', contenuto: this.museo[0].INFO, museoClass: this.classe, contentClass: 'content_informazioni'});
        break;

      case "PalazzoService":
        this.navCtrl.setRoot(MmIlPalazzoPage, {datiMuseo: this.museo, voceMenu: 'IL PALAZZO', contenuto: this.museo[0].IL_PALAZZO, museoClass: this.classe, contentClass: 'content_il_palazzo'});
        break;

      case "CollezioniService":
        this.navCtrl.setRoot(MmLeCollezioniPage, {datiMuseo: this.museo, voceMenu: 'LE COLLEZIONI', contenuto: this.museo[0].LE_COLLEZIONI, museoClass: this.classe, contentClass: 'content_le_collezioni'});
        break;

      case "BibliotecaService":
        this.navCtrl.setRoot(MmLaBibliotecaPage, {datiMuseo: this.museo, voceMenu: 'LA BIBLIOTECA', contenuto: this.museo[0].LA_BIBLIOTECA, museoClass: this.classe, contentClass: 'content_la_biblioteca'});
        break;

      case "OrariService":
        this.navCtrl.setRoot(MmOrariPage, {datiMuseo: this.museo, voceMenu: 'ORARI', contenuto: this.museo[0].ORARI, museoClass: this.classe, contentClass: 'content_orari'});
        break;

      case "BigliettiService":
        this.navCtrl.setRoot(MmBigliettiPage, {datiMuseo: this.museo, voceMenu: 'BIGLIETTI', contenuto: this.museo[0].BIGLIETTI, museoClass: this.classe, contentClass: 'content_biglietti'});
        break;

        default:
        break;
    } 
  }

}
