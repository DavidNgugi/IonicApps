import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountsPage } from '../pages/accounts/accounts';
import { NoticesPage } from '../pages/notices/notices';
import { NoticesDetailsPage } from '../pages/notices-details/notices-details';
import { ReportsPage } from '../pages/reports/reports';
import { ReportDetailsPage } from '../pages/report-details/report-details';
import { SundayReportsPage } from '../pages/sunday-reports/sunday-reports';
import { SundayReportDetailsPage } from '../pages/sunday-report-details/sunday-report-details';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NoticesPage,
    NoticesDetailsPage,
    AccountsPage,
    ReportsPage,
    ReportDetailsPage,
    SundayReportsPage,
    SundayReportDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NoticesPage,
    NoticesDetailsPage,
    AccountsPage,
    ReportsPage,
    ReportDetailsPage,
    SundayReportsPage,
    SundayReportDetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
