import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{MainPage}from'../pages/main/main';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';


import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {ResetpwdPage} from "../pages/resetpwd/resetpwd";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHandler } from '@angular/common/http';
import {FirstPage} from "../pages/first/first";


export const firebaseConfig = {

  apiKey: "AIzaSyCwPiIsKXsOG4RsAySjxvwRcvPwA7F14Gw",
  authDomain: "test-1-9da41.firebaseapp.com",
  databaseURL: "https://test-1-9da41.firebaseio.com",
  projectId: "test-1-9da41",
  storageBucket: "test-1-9da41.appspot.com",
  messagingSenderId: "229645684439"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage,
    FirstPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage,
    FirstPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    HttpClient
  ]
})
export class AppModule {}
