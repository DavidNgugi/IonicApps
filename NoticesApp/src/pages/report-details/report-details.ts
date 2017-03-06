import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ReportDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'report-details.html'
})
export class ReportDetailsPage {

  report:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.report = navParams.get('report');
  }



}
