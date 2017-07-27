import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the MesajlarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mesajlar',
  templateUrl: 'mesajlar.html',
})
export class MesajlarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.getMessages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesajlarPage');
  }
  mesaj:any;
  getMessages(){
	  let ref=firebase.database().ref('messages');
	  ref.orderByChild("a_id")
   .equalTo("f8d2c179zOPiKiu6K2HdfTuDw6E3")
   .on("child_added", function(snapshot) {
      console.log(snapshot.val());
    });

}

}
