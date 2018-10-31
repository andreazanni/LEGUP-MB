import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostreTemporaneePage } from './mostre-temporanee';

@NgModule({
  declarations: [
    MostreTemporaneePage,
  ],
  imports: [
    IonicPageModule.forChild(MostreTemporaneePage),
  ],
})
export class MostreTemporaneePageModule {}
