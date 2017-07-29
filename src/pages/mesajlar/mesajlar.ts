import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
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
	ref;
	name;
	newmessage;
	messagesList;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alert:AlertController) {
	 this.ref = firebase.database().ref('messages');
  }

  ionViewDidLoad() {

  	//reading data from firebase

  }
  send(){
  	// add new data to firebase
  	this.ref.push({
  		name: this.name.username,
  		message: this.newmessage
  	});

console.log('ionViewDidLoad MesajlarPage');
  }
  mesaj:any;
  
}
