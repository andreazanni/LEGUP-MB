import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MmBigliettiPage } from './mm-biglietti';

@NgModule({
  declarations: [
    MmBigliettiPage,
  ],
  imports: [
    IonicPageModule.forChild(MmBigliettiPage),
  ],
})
export class MmBigliettiPageModule {}
