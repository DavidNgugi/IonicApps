import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NoticesPage } from '../notices/notices';
import { ReportsPage } from '../reports/reports';
import { SundayReportsPage } from '../sunday-reports/sunday-reports';
import { AccountsPage } from '../accounts/accounts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NoticesPage;
  tab3Root: any = ReportsPage;
  tab4Root: any = SundayReportsPage;
  tab5Root: any = AccountsPage;

  constructor() {

  }
}
