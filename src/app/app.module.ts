import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Facebook } from '@ionic-native/facebook'
import {RegisterPage} from '../pages/register/register';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
//import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import { DetailsPage } from '../pages/details/details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push } from '@ionic-native/push';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicStorageModule } from '@ionic/storage';

import { KisilerPage } from '../pages/kisiler/kisiler';
import { MesajlarPage } from '../pages/mesajlar/mesajlar';
import { ProfilPage } from '../pages/profil/profil';
import { MesajPage } from '../pages/mesaj/mesaj';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'bb41db03'
  },
  'push': {
    'sender_id': '727631075871',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
  //  ListPage,
    DetailsPage,
    LoginPage,
	RegisterPage,
	KisilerPage,
	MesajlarPage,
	ProfilPage,
	MesajPage
  ],
  imports: [
    BrowserModule,
     CloudModule.forRoot(cloudSettings),
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
  //  ListPage,
    LoginPage,
	RegisterPage,
	KisilerPage,
	MesajlarPage,
	ProfilPage,
	MesajPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
