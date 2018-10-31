import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BigliettiPage } from './biglietti';

@NgModule({
  declarations: [
    BigliettiPage,
  ],
  imports: [
    IonicPageModule.forChild(BigliettiPage),
  ],
})
export class BigliettiPageModule {}
