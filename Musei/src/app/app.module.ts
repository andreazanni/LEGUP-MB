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
import { InformazioniPage } from '../pages/menu-Museo/informazioni/informazioni';
import { OrariPage } from '../pages/menu-Museo/orari/orari';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	  Splash,
	  MuseiPage,
    MuseoPage,
    ContentPage,
    InformazioniPage,
    OrariPage
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
    InformazioniPage,
    OrariPage
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
