import { Component,NgZone } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage} from '../login/login';


/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
userProfile:any=null;
  constructor(private zone: NgZone,public navCtrl: NavController, public navParams: NavParams,private storage:Storage,public tst:ToastController)
  {
	 // this.getUserDetails();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

 
   presentToast(msj){
let toast=this.tst.create({
  message:msj,
  duration:1000,
  position:'bottom'
});
toast.present();


    }
	    Logout()
    {
      this.storage.remove('user');
   this.zone.run(() => {
 
});
      this.presentToast('Çıkış Yapıldı.');
	  
    }
 getUserDetails(){
this.storage.get('user').then((val) => {
let username=val.displayName;
this.userProfile=val;

  }).catch((error)=>{
	  this.presentToast('Lütfen giriş yapınız')
	  this.navCtrl.push(LoginPage);
	  
	  });

}
  

}
