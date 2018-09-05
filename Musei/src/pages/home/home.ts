import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MuseiPage } from '../musei/musei';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  goMuseiPage() {
  	this.navCtrl.push(MuseiPage);
  }
	

}
