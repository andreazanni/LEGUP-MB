import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventiPage } from './eventi';

@NgModule({
  declarations: [
    EventiPage,
  ],
  imports: [
    IonicPageModule.forChild(EventiPage),
  ],
})
export class EventiPageModule {}
