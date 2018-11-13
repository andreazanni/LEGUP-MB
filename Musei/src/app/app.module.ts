import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NativePageTransitions } from '@ionic-native/native-page-transitions'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';
import { MuseiPage } from '../pages/musei/musei';
import { MuseoPage } from '../pages/museo/museo';
import { RicercaMuseiProvider } from '../providers/ricerca-musei/ricerca-musei';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { MmInformazioniPage } from '../pages/mm-informazioni/mm-informazioni';
import { MmOrariPage } from '../pages/mm-orari/mm-orari';
import { MmBigliettiPage } from '../pages/mm-biglietti/mm-biglietti';
import { MmIlPalazzoPage } from '../pages/mm-il-palazzo/mm-il-palazzo';
import { MmLeCollezioniPage } from '../pages/mm-le-collezioni/mm-le-collezioni';
import { MmLaBibliotecaPage } from '../pages/mm-la-biblioteca/mm-la-biblioteca';
import { MmComeRaggiungerciPage } from '../pages/mm-come-raggiungerci/mm-come-raggiungerci';
import { MmEventiPage } from '../mm-eventi/mm-eventi';
import { MenuPage } from '../pages/menu/menu';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	  Splash,
	  MuseiPage,
    MuseoPage,
    MmInformazioniPage,
    MmOrariPage,
    MmBigliettiPage,
    MmIlPalazzoPage,
    MmLeCollezioniPage,
    MmLaBibliotecaPage,
    MmComeRaggiungerciPage,
    MmEventiPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      navExitApp: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	  Splash,
	  MuseiPage,
    MuseoPage,
    MmInformazioniPage,
    MmOrariPage,
    MmBigliettiPage,
    MmIlPalazzoPage,
    MmLeCollezioniPage,
    MmLaBibliotecaPage,
    MmComeRaggiungerciPage,
    MmEventiPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RicercaMuseiProvider,
    SocialSharing,
    TextToSpeech,
    Diagnostic,
    NativePageTransitions,
    Geolocation,
    LaunchNavigator
  ]
})
export class AppModule {}
