import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  public fireAuth: any;
  public userData: any;

  constructor(public http: HttpClient,public fauth:AngularFireAuth
  ) {
    this.fireAuth = firebase.auth();
    this.userData = firebase.database().ref('/userData');

  }
  doLogin(email: string, password: string): any {
    return this.fauth.auth.signInWithEmailAndPassword(email,password);
  }
  register(email: string, password: string): any {
    return this.fauth.auth.createUserWithEmailAndPassword(email,password)
      .then((newUser) => {
        this.userData.child(newUser.uid).set({email: email});
      });
  }
  resetPassword(email: string): any {
    return this.fauth.auth.sendPasswordResetEmail(email);
  }
  doLogout(): any {
    return this.fauth.auth.signOut();
  }

}
