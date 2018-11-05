import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';
import { MuseiPage } from '../pages/musei/musei';
import { MuseoPage } from '../pages/museo/museo';
import { RicercaMuseiProvider } from '../providers/ricerca-musei/ricerca-musei';
import { HttpModule } from '@angular/http';
import { ContentPage } from '../pages/content/content';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { MmInformazioniPage } from '../pages/mm-informazioni/mm-informazioni';
import { MmOrariPage } from '../pages/mm-orari/mm-orari';
import { MmBigliettiPage } from '../pages/mm-biglietti/mm-biglietti';
import { MmIlPalazzoPage } from '../pages/mm-il-palazzo/mm-il-palazzo';
import { MmLeCollezioniPage } from '../pages/mm-le-collezioni/mm-le-collezioni';
import { MmLaBibliotecaPage } from '../pages/mm-la-biblioteca/mm-la-biblioteca';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	  Splash,
	  MuseiPage,
    MuseoPage,
    ContentPage,
    MmInformazioniPage,
    MmOrariPage,
    MmBigliettiPage,
    MmIlPalazzoPage,
    MmLeCollezioniPage,
    MmLaBibliotecaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	  Splash,
	  MuseiPage,
    MuseoPage,
    ContentPage,
    MmInformazioniPage,
    MmOrariPage,
    MmBigliettiPage,
    MmIlPalazzoPage,
    MmLeCollezioniPage,
    MmLaBibliotecaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RicercaMuseiProvider,
    SocialSharing,
    TextToSpeech,
    Diagnostic,
    Geolocation
  ]
})
export class AppModule {}
