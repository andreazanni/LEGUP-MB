import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IlPalazzoPage } from './il-palazzo';

@NgModule({
  declarations: [
    IlPalazzoPage,
  ],
  imports: [
    IonicPageModule.forChild(IlPalazzoPage),
  ],
})
export class IlPalazzoPageModule {}
