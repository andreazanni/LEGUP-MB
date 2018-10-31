import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformazioniPage } from './informazioni';

@NgModule({
  declarations: [
    InformazioniPage,
  ],
  imports: [
    IonicPageModule.forChild(InformazioniPage),
  ],
})
export class InformazioniPageModule {}
