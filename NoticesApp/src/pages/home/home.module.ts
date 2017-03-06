import { NgModule } from '@angular/core';
import { IonicModule} from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
  imports: [
    IonicModule.forRoot(HomePage)
  ],
  declarations: [
    HomePage
  ],
  exports: [
    HomePage
  ]
})

export class HomeModule{}
