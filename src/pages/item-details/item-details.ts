import { Component } from '@angular/core';

import { NavController, NavParams,AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController:AlertController,public fb: Facebook) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }



  showAlert(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));

      this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    let alert=this.alertController.create({
      title:'Hi Boris!',
      subTitle:this.selectedItem.title,
      buttons:['Ok','Not OK!']
    });
    alert.present();
    }
}
