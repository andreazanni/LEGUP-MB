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

  constructor(public menuCtrl: MenuController, public nav: NavController, public navParams: NavParams) {
    this.museo = this.navParams.get('musei');
  }

 //Apre il side menu
 openMenu() {
   this.menuCtrl.open();
 }

  //Associato al tasto per tornare all'home page
  goHomePage() {
    this.nav.push(HomePage);  
  }
}
