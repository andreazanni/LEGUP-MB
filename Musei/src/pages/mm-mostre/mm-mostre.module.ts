import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MmMostrePage } from './mm-mostre';

@NgModule({
  declarations: [
    MmMostrePage,
  ],
  imports: [
    IonicPageModule.forChild(MmMostrePage),
  ],
})
export class MmMostrePageModule {}
