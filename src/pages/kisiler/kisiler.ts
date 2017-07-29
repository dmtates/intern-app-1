import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { MesajPage } from '../mesaj/mesaj';
import firebase from 'firebase';

/**
 * Generated class for the KisilerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-kisiler',
  templateUrl: 'kisiler.html',
})
export class KisilerPage {
	
  kisiler:Array<{key: string, username: string}>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
this.kisiler=[];
  this.presentLoadingDefault();
  }

  getUsers(){
	   firebase.database().ref('user').once('value').then( (kisi) =>{
	  kisi.forEach( (child) => {
		  let kisi={key:child.key,
		  username:child.child('username').val()
		  };
		 
		  this.kisiler.push(kisi);
	  })
  }).catch( (error) => {
	  
	  console.log(error);
  });
  }
presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Kişiler Yükleniyor...'
  });

  loading.present().then( () => {
	  this.getUsers();
	  loading.dismiss();
	  
  });


} 
  ionViewDidLoad() {
    console.log('ionViewDidLoad KisilerPage');
  }

}
