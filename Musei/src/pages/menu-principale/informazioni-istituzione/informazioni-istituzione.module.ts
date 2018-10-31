import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformazioniIstituzionePage } from './informazioni-istituzione';

@NgModule({
  declarations: [
    InformazioniIstituzionePage,
  ],
  imports: [
    IonicPageModule.forChild(InformazioniIstituzionePage),
  ],
})
export class InformazioniIstituzionePageModule {}
