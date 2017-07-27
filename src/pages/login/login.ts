import { Component } from '@angular/core';
import { NavController, ToastController,NavParams ,Platform,LoadingController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Storage } from '@ionic/storage';
import {RegisterPage} from '../register/register';
import {ProfilPage} from '../profil/profil';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email:any;
password:any;
  constructor(public navCtrl: NavController,private facebook: Facebook,private storage: Storage,public tst:ToastController,public loadingCtrl: LoadingController) {
this.isLogin();
  }
  userProfile: any = null;
  mesaj:any="asd";
  
  facebookLogin(){
       this.facebook.login(['email']).then( (response) => {
           const facebookCredential = firebase.auth.FacebookAuthProvider
               .credential(response.authResponse.accessToken);

           firebase.auth().signInWithCredential(facebookCredential)
           .then((success) => {
               console.log("Firebase success: " + JSON.stringify(success));
               this.storage.set('user',success);
               this.userProfile = success;
               this.navCtrl.push(HelloIonicPage);
			   //this.presentToast(firebase.auth().currentUser.uid);
               //this.presentToast(firebase.auth().currentUser.uid);
           })
           .catch((error) => {
               console.log("Firebase failure: " + JSON.stringify(error));
           });

       }).catch((error) => { console.log(error) });
	 }
	   presentToast(msj){
let toast=this.tst.create({
  message:msj,
  duration:2000,
  position:'bottom'
});
toast.present();


    }
	   normalLogin(){
let loading = this.loadingCtrl.create({
    content: 'Giriş yapılıyor...'
  });

   loading.present().then( () => {
	   firebase.auth().signInWithEmailAndPassword(
        this.email,
		this.password
      ).then((success)=>{
		   this.storage.set('user',success);
      this.navCtrl.push(HelloIonicPage);
	  }).catch((error)=>{
		  this.presentToast(error);
	  });
	  
	  loading.dismiss();
	  
  });
     
    }
	   
	isLogin(){
	this.storage.get('user').then((val) => {
this.navCtrl.push(HelloIonicPage);
  }).catch((error)=>{});
	}
	
	openRegisterPage(){
   this.navCtrl.push(RegisterPage);
		
	}
    registerWithEmailAndPassword(){
      firebase.auth().createUserWithEmailAndPassword(
        'burakakyol0795@gmail.com',
        "burak1234"
      ).then((success)=>{
      

    }).catch((error)=>{

      
    });


    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
