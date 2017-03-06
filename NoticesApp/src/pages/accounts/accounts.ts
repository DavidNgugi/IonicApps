import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

import { Accounts } from '../../providers/accounts';

/*
  Generated class for the Accounts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'accounts.html'
})
export class AccountsPage {
	accounts:any;
	loader:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private accountService : Accounts) {
  	this.loader = this.loadingCtrl.create({
      content: "Fetching accounts..."
    });

    this.loader.present();
  }

  ngOnInit(){
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.getAccounts().subscribe(response => {
      this.loader.dismissAll();
      console.log(response);
      this.accounts = response;
    });
  }
  

}
