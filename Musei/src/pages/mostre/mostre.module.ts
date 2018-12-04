import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrePage } from './mostre';

@NgModule({
  declarations: [
    MostrePage,
  ],
  imports: [
    IonicPageModule.forChild(MostrePage),
  ],
})
export class MostrePageModule {}
