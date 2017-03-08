import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { NoticesPage } from '../notices/notices';
import { ReportsPage } from '../reports/reports';
import { SundayReportsPage } from '../sunday-reports/sunday-reports';
import { AccountsPage } from '../accounts/accounts';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    
  }

  goToPage(pageName){
    switch(pageName){
      case 'NoticesPage':
        this.navCtrl.setRoot(NoticesPage);
        break;
      case 'ReportsPage':
        this.navCtrl.setRoot(ReportsPage);
        break;
      case 'SundayReportsPage':
        this.navCtrl.setRoot(SundayReportsPage);
        break;
      case 'AccountsPage':
        this.navCtrl.setRoot(AccountsPage);
        break;
      
    }
  }
  


}
