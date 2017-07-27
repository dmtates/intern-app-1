import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import firebase from 'firebase';
import {LoginPage} from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
email:any;
password:any;
re_pass:any;
username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public tst:ToastController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
    presentToast(msj){
let toast=this.tst.create({
  message:msj,
  duration:1000,
  position:'bottom'
});
toast.present();


    }
  openLoginPage(){
	 
	  this.navCtrl.push(LoginPage);
  }
  registerWithEmailAndPassword(){
	 if(this.username !=null && this.email!=null){
	  if(this.password===this.re_pass){
      firebase.auth().createUserWithEmailAndPassword(
        this.email,
        this.password,
		

      ).then((success)=>{
        firebase.database().ref('user/'+success.uid).set({
		username:this.username,
          email:success.email
          
        });
	this.presentLoadingDefault();
	 this.navCtrl.push(LoginPage);
    }).catch((error) =>{
		this.presentToast(error);
	});
	}
	else
	{   
		this.presentToast("Girilen şifreler eşleşmiyor.Lütfen kontrol ediniz!");
	}
}
else
	{   
		this.presentToast("Username ve email alanı boş geçilemez!");
	}
  }
presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Kayıt yapılıyor...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
} 


 
	

	
	}

