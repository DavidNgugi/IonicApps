import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

import { SundayReports } from '../../providers/sunday-reports';
import { SundayReportDetailsPage } from '../sunday-report-details/sunday-report-details';

/*
  Generated class for the SundayReports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'sunday-reports.html'
})
export class SundayReportsPage {
  reports:any;
  loader:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private sundayReportService : SundayReports) {
  
    this.loader = this.loadingCtrl.create({
      content: "Fetching Sunday Summaries..."
    });

    this.loader.present();

  }

  ngOnInit(){
    this.getSundayReports();
  }

  doRefresh(refresher){
    setTimeout(() => {
      this.sundayReportService.getSundayReports().subscribe(response => {
        this.loader.dismissAll();
        refresher.complete();
        this.reports = response;
      });
    }, 2000);
  }

  getSundayReports(){
    this.sundayReportService.getSundayReports().subscribe(response => {
      this.loader.dismissAll();
      this.reports = response;
    });
  }

  viewSundayReport(sundayReport){
    this.navCtrl.push(SundayReportDetailsPage,{
      report: sundayReport
    });
  }
}
