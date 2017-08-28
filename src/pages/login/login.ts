import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	login=HomePage;
	signUp= SignUpPage;
  constructor(public navCtrl: NavController) {

  }


   SignUpPage() {
    this.navCtrl.push(this.signUp);
  }

  goToHomePage(){
 	 this.navCtrl.push(this.login);
  }
}
