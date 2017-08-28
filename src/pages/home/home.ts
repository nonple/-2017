import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PictogramPage } from '../pictogram/pictogram'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	pictogramPage = PictogramPage;
	constructor(public navCtrl: NavController) {
	}

  goToPictogram(){
  	this.navCtrl.push(this.pictogramPage);
  }
}
