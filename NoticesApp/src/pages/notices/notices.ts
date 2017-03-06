import { Component } from '@angular/core';
import { NavController,LoadingController, NavParams } from 'ionic-angular';

import { Notices } from '../../providers/notices';
import { NoticesDetailsPage } from '../notices-details/notices-details';

/*
  Generated class for the Notices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'notices.html'
})
export class NoticesPage {
  items:any;
  weeks:any;
  loader:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private noticeService : Notices) {
    this.loader = this.loadingCtrl.create({
      content: "Fetching notices..."
    });

    this.loader.present();
  }

  ngOnInit(){
    this.getNotices();
  }

  getNotices(){
    this.noticeService.getNotices().subscribe(response => {
      this.loader.dismissAll();
      //console.log(response);
      this.items = response;
    });
  }

  viewNotice(notices){
    this.navCtrl.push(NoticesDetailsPage,{
      notices : notices
    })
  }


}
