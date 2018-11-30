import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventiCalendarioPage } from './eventi-calendario';

@NgModule({
  declarations: [
    EventiCalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EventiCalendarioPage),
  ],
})
export class EventiCalendarioPageModule {}
