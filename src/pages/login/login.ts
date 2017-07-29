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
userProfile: any = null;
  constructor(public navCtrl: NavController,private facebook: Facebook,private storage: Storage,public tst:ToastController,public loadingCtrl: LoadingController) {
this.checkUser();
  }
  
  mesaj:any="asd";
  
  
  /*Uygulamaya facebook ile login yapılması */
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
	 
	 /*Ekranda bilgi mesajlarının gösterilmesi için hazırlanan fonksiyon */
	   presentToast(msj){
let toast=this.tst.create({
  message:msj,
  duration:2000,
  position:'bottom'
});
toast.present();


    }
	/*Email şifre ile giriş yapılması */
	   normalLogin(){
if(this.email!=null&&this.password!==null){
let loading = this.loadingCtrl.create({
    content: 'Giriş yapılıyor...'
  });

   loading.present().then( () => {
	   firebase.auth().signInWithEmailAndPassword(
        this.email,
		this.password
      ).then((success)=>{
		  console.log('Giriş yapılıyor');
		   this.storage.set('user',success);
      this.navCtrl.push(HelloIonicPage);
	  console.log('Giriş başarılı');
	  }).catch((error)=>{
		  this.presentToast(error);
	  });
	  
	  loading.dismiss();
	  
  });
     
    }
	 else{
this.presentToast("Hiçbir alan boş geçilemez.Giriş bilgilerinizi kontrol ediniz!");
	 }		
	   }	
	 /* Kisi kontrolü */
checkUser(){
		let loading = this.loadingCtrl.create({
    content: 'Lütfen bekleyiniz...'
  });
		loading.present().then( () => {
	   this.isLogin();
	  
	  loading.dismiss();
	  
  });
	}
/*Login kontrolünün yapılması */	   
	isLogin(){
	
	this.storage.get('user').then((val) => {
		 this.userProfile=val;
		if(val.hasOwnProperty('uid') && val.uid !==null){
			 
			  this.navCtrl.setRoot(HelloIonicPage);
		}
		else
		{
		this.presentToast('sdfsf');
		}
	
	 
	
  }).catch( (error) => {
	  
	  console.log('Giriş yapınız');
  });
  
 
	
	}
/*Kayıt sayfasının açılması */
	openRegisterPage(){
   this.navCtrl.push(RegisterPage);
		
	}
   


	
/*Sayfa açılmasının loglanması */
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
