import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MuseiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musei',
  templateUrl: 'musei.html',
})
export class MuseiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  goHomePage() {
  	this.navCtrl.push(HomePage);
  }

}
