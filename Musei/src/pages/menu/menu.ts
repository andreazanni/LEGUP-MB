import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MmInformazioniPage } from '../mm-informazioni/mm-informazioni';
import { MmOrariPage } from '../mm-orari/mm-orari';
import { MmBigliettiPage } from '../mm-biglietti/mm-biglietti';
import { MmIlPalazzoPage } from '../mm-il-palazzo/mm-il-palazzo';
import { MmLeCollezioniPage } from '../mm-le-collezioni/mm-le-collezioni';
import { MmLaBibliotecaPage } from '../mm-la-biblioteca/mm-la-biblioteca';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { MuseoPage } from '../museo/museo';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  museo: any;
  classe: string;
  ultimo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativePageTransitions: NativePageTransitions) {
    this.museo = this.navParams.get('datiMuseo');
    this.classe = this.navParams.get('museoClass');
    this.ultimo = this.navParams.get('ultimo');
  }

  return() {
    this.onLoad(this.ultimo, false);
  }

  onLoad(service: string, animation: boolean) {

    var options : NativeTransitionOptions = {
      direction: 'left',
      duration: 600
    }

    switch(service) {

      case "MuseoService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MuseoPage, {musei: this.museo, classe1: this.classe});
      break;

      case "PalazzoService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmIlPalazzoPage, {datiMuseo: this.museo, voceMenu: 'IL PALAZZO', contenuto: this.museo[0].IL_PALAZZO, museoClass: this.classe, contentClass: 'content_il_palazzo'});
        break;

      case "CollezioniService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmLeCollezioniPage, {datiMuseo: this.museo, voceMenu: 'LE COLLEZIONI', contenuto: this.museo[0].LE_COLLEZIONI, museoClass: this.classe, contentClass: 'content_le_collezioni'});
        break;

      case "BibliotecaService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmLaBibliotecaPage, {datiMuseo: this.museo, voceMenu: 'LA BIBLIOTECA', contenuto: this.museo[0].LA_BIBLIOTECA, museoClass: this.classe, contentClass: 'content_la_biblioteca'});
        break;

      case "InformazioniService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmInformazioniPage, {datiMuseo: this.museo, voceMenu: 'INFORMAZIONI', contenuto: this.museo[0].INFO, museoClass: this.classe, contentClass: 'content_informazioni'});
        break;

      case "OrariService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmOrariPage, {datiMuseo: this.museo, voceMenu: 'ORARI', contenuto: this.museo[0].ORARI, museoClass: this.classe, contentClass: 'content_orari'});
        break;

      case "BigliettiService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmBigliettiPage, {datiMuseo: this.museo, voceMenu: 'BIGLIETTI', contenuto: this.museo[0].BIGLIETTI, museoClass: this.classe, contentClass: 'content_biglietti'});
        break;

        default:
        break;
    } 
  }

}
