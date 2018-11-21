import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MmInformazioniPage } from '../mm-informazioni/mm-informazioni';
import { MmOrariPage } from '../mm-orari/mm-orari';
import { MmBigliettiPage } from '../mm-biglietti/mm-biglietti';
import { MmIlPalazzoPage } from '../mm-il-palazzo/mm-il-palazzo';
import { MmLeCollezioniPage } from '../mm-le-collezioni/mm-le-collezioni';
import { MmLaBibliotecaPage } from '../mm-la-biblioteca/mm-la-biblioteca';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { MuseoPage } from '../museo/museo';
import { MmComeRaggiungerciPage } from '../mm-come-raggiungerci/mm-come-raggiungerci';
import { MmEventiPage } from '../mm-eventi/mm-eventi';
import { MmContattiPage} from '../mm-contatti/mm-contatti';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Instagram } from '@ionic-native/instagram';
import { MmCondivisioneSocialPage } from '../mm-condivisione-social/mm-condivisione-social';
import { MmSaleEspositivePage } from '../mm-sale-espositive/mm-sale-espositive';
import { MmPercorsiATemaPage } from '../mm-percorsi-a-tema/mm-percorsi-a-tema';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  museo: any;
  classe: string;
  ultimo: string;
  unregisterBackButtonAction: any;

  constructor(public socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams, public nativePageTransitions: NativePageTransitions, public platform: Platform,
    public instagram: Instagram) {
    this.museo = this.navParams.get('datiMuseo');
    this.classe = this.navParams.get('museoClass');
    this.ultimo = this.navParams.get('ultimo');
  }

  return() {
    this.onLoad(this.ultimo, false);
  }

  ionViewDidLoad() {
    this.initializeBackButton();
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButton(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.navCtrl.push(MuseoPage, {musei: this.museo, classe1: this.classe});
      this.navCtrl.removeView(this.navCtrl.last());
    });
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
        this.navCtrl.removeView(this.navCtrl.last());
      break;

      case "PalazzoService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmIlPalazzoPage, {datiMuseo: this.museo, voceMenu: 'IL PALAZZO', contenuto: this.museo[0].IL_PALAZZO, museoClass: this.classe, contentClass: 'content_il_palazzo'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "CollezioniService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmLeCollezioniPage, {datiMuseo: this.museo, voceMenu: 'LE COLLEZIONI', contenuto: this.museo[0].LE_COLLEZIONI, museoClass: this.classe, contentClass: 'content_le_collezioni'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "BibliotecaService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmLaBibliotecaPage, {datiMuseo: this.museo, voceMenu: 'LA BIBLIOTECA', contenuto: this.museo[0].LA_BIBLIOTECA, museoClass: this.classe, contentClass: 'content_la_biblioteca'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "SaleEspositiveService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmSaleEspositivePage, {datiMuseo: this.museo, voceMenu: 'SALE ESPOSITIVE', contenuto: this.museo[0].SALE_ESPOSITIVE, museoClass: this.classe, contentClass: 'content_sale_espositive'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "PercorsiATemaService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmPercorsiATemaPage, {datiMuseo: this.museo, voceMenu: 'PERCORSI A TEMA', contenuto: this.museo[0].PERCORSI_A_TEMA, museoClass: this.classe, contentClass: 'content_percorsi_a_tema'});
        break;

      case "InformazioniService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmInformazioniPage, {datiMuseo: this.museo, voceMenu: 'INFORMAZIONI', contenuto: this.museo[0].INFO, museoClass: this.classe, contentClass: 'content_informazioni'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "IndicazioniService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmComeRaggiungerciPage, {datiMuseo: this.museo, voceMenu: 'COME RAGGIUNGERCI', contenuto: this.museo[0].COME_RAGGIUNGERCI, museoClass: this.classe, contentClass: 'content_come_raggiungerci'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "OrariService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmOrariPage, {datiMuseo: this.museo, voceMenu: 'ORARI', contenuto: this.museo[0].ORARI, museoClass: this.classe, contentClass: 'content_orari'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "BigliettiService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmBigliettiPage, {datiMuseo: this.museo, voceMenu: 'BIGLIETTI', contenuto: this.museo[0].BIGLIETTI, museoClass: this.classe, contentClass: 'content_biglietti'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "EventiService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmEventiPage, {datiMuseo: this.museo, voceMenu: 'EVENTI', contenuto: this.museo[0].EVENTI, museoClass: this.classe, contentClass: 'content_eventi'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "SocialService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmCondivisioneSocialPage, {datiMuseo: this.museo, voceMenu: 'CONDIVISIONE SOCIAL', museoClass: this.classe, contentClass: 'content_condivisione_social'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

      case "ContattiService":
        if (animation) {
          this.nativePageTransitions.flip(options);
        }
        this.navCtrl.push(MmContattiPage, {datiMuseo: this.museo, voceMenu: 'CONTATTI', contenuto: this.museo[0].CONTATTI, museoClass: this.classe, contentClass: 'content_contatti'});
        this.navCtrl.removeView(this.navCtrl.last());
        break;

        default:
        break;
    }
  }

}

