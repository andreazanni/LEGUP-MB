import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MuseoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-museo',
  templateUrl: 'museo.html',
})
export class MuseoPage {

  museo: any;

  constructor(public menuCtrl: MenuController, public nav: NavController, public navParams: NavParams) {
    this.museo = this.navParams.get('musei');
    console.log(this.museo[0].NOME)
  }

 openMenu() {
   this.menuCtrl.open();
 }
}
