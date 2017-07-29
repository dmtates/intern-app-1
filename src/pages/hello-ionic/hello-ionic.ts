import { Component,ViewChild,NgZone } from '@angular/core';
import { NavController,ToastController,Platform,Content,LoadingController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { KisilerPage } from '../kisiler/kisiler';
import { MesajlarPage } from '../mesajlar/mesajlar';
import { ProfilPage } from '../profil/profil';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
 Kisiler = KisilerPage;
  Mesajlar = MesajlarPage;
  Profil = ProfilPage;

@ViewChild(Content) content: Content;
 userProfile: any = null;
  constructor(private loadingCtrl:LoadingController,public navCtrl: NavController,private facebook: Facebook,public tst:ToastController, public zone: NgZone,private storage:Storage)
  {
	  
	  
	  this.isLogin();
	

  }
 
getUserDetails(){
	console.log('Bilgiler alınıyor');
this.storage.get('user').then( (val)=>{this.userProfile=val});
console.log(this.userProfile);
console.log('Bilgiler alındı');

}

scrollTo() {
   // set the scrollLeft to 0px, and scrollTop to 500px
   // the scroll duration should take 200ms
   this.content.scrollTo(0, 500, 200);
 }

    presentToast(msj){
let toast=this.tst.create({
  message:msj,
  duration:1000,
  position:'bottom'
});
toast.present();


    }
    openLogin(){
      this.navCtrl.push(LoginPage)

    }
    Logout()
    {
      this.storage.remove('user');
      this.navCtrl.setRoot(LoginPage);
      this.presentToast('Çıkış Yapıldı.');
	  
    }
	

		isLogin(){
	
	this.storage.get('user').then((val) => {
		 this.userProfile=val;
		if(val.hasOwnProperty('uid') && val.uid !==null){
			this.presentToast('Hoşgeldiniz');
		}
		else
		{
		console.log('Giriş yapınız');
		this.navCtrl.setRoot(LoginPage);
		}
	
	 
	
  }).catch( (error) => {
	  this.presentToast('Giriş Yapınız');
		this.navCtrl.setRoot(LoginPage);
  });
  
 
	
	}
	
	






}
