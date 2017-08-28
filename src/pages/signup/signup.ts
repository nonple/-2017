import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

	signUp=LoginPage;
	
  constructor(public navCtrl: NavController) {

  }

   SignUpPage() {
    this.navCtrl.push(this.signUp);
  }

}