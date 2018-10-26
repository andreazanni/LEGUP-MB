import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-museo',
  templateUrl: 'museo.html',
})
export class MuseoPage {

  museo: any;
  classeMuseo: any;

  constructor(public menuCtrl: MenuController, public nav: NavController, public navParams: NavParams) {
    this.museo = this.navParams.get('musei');
    this.classeMuseo = this.navParams.get('classe1');
  }

  ionViewDidLoad() {
    var idClass = document.getElementById('paginaMuseo');
    idClass.classList.add(this.classeMuseo);
    var idCardDescrizione = document.getElementById('descrizione');
    idCardDescrizione.innerHTML = this.museo[0].DESCRIZIONE
    //calcolo altezza contenitore descrizione museo
    var idCardTitle = document.getElementById('museo_cardTitle');
    idCardDescrizione.style.height = idCardTitle.offsetHeight - idCardDescrizione.offsetTop+ "px";
  }


 //Apre il side menu
 openMenu() {
   this.menuCtrl.open();
 }

  //Associato al tasto per tornare all'home page
  goHomePage() {
    this.nav.push(HomePage);
    this.nav.removeView(this.nav.last());

  }
}
