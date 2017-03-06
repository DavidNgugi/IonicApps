import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NoticesDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'notices-details.html'
})
export class NoticesDetailsPage {
  notices:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notices = navParams.get('notices');
  }



}
