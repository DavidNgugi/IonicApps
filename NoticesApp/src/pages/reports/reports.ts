import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

import { Reports } from '../../providers/reports';
import { ReportDetailsPage } from '../report-details/report-details';

/*
  Generated class for the Reports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'reports.html'
})
export class ReportsPage {
  reports:any;
  loader:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private reportService : Reports) {
    this.loader = this.loadingCtrl.create({
      content: "Fetching reports..."
    });

    this.loader.present();
  }

  ngOnInit(){
    this.getReports();
  }

  getReports(){
    this.reportService.getReports().subscribe(response => {
      this.loader.dismissAll();
      this.reports = response;
    });
  }

  viewReport(report){
    this.navCtrl.push(ReportDetailsPage,{
      report: report
    });
  }

}
