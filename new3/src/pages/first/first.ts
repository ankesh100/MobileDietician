import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import firebase from 'firebase';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        navCtrl.setRoot(LoginPage);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  logout() {
    this.authService.doLogout();
  }

}
