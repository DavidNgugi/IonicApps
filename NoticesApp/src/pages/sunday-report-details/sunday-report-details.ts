import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SundayReportDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'sunday-report-details.html'
})
export class SundayReportDetailsPage {

  report:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.report = navParams.get('report');
  }
}
