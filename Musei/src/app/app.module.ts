import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NativePageTransitions } from '@ionic-native/native-page-transitions'
import { Camera } from '@ionic-native/camera';

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
import { MmEventiPage } from '../pages/mm-eventi/mm-eventi';
import { MmCondivisioneSocialPage } from '../pages/mm-condivisione-social/mm-condivisione-social';
import { MenuPage } from '../pages/menu/menu';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { MmContattiPage } from '../pages/mm-contatti/mm-contatti';
import { Instagram } from '@ionic-native/instagram';
import { Market } from '@ionic-native/market';
import { MmSaleEspositivePage } from '../pages/mm-sale-espositive/mm-sale-espositive';
import { MpInformazioniGeneraliPage } from '../pages/mp-informazioni-generali/mp-informazioni-generali';
import { MpLeAreeMusealiPage } from '../pages/mp-le-aree-museali/mp-le-aree-museali';
import { MpContattiPage } from '../pages/mp-contatti/mp-contatti';
import { MmPercorsiATemaPage } from '../pages/mm-percorsi-a-tema/mm-percorsi-a-tema';
import { MmMostrePage } from '../pages/mm-mostre/mm-mostre';
import { TestCalendarPage } from '../pages/test-calendar/test-calendar';
import { Calendar } from '@ionic-native/calendar';
import { EventiCalendarioPage } from '../pages/eventi-calendario/eventi-calendario';

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
    MenuPage,
    MmContattiPage,
    MmCondivisioneSocialPage,
    MmSaleEspositivePage,
    MpInformazioniGeneraliPage,
    MpContattiPage,
    MpLeAreeMusealiPage,
    MmPercorsiATemaPage,
    MmMostrePage,
    TestCalendarPage,
    EventiCalendarioPage
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
    MenuPage,
    MmContattiPage,
    MmCondivisioneSocialPage,
    MmSaleEspositivePage,
    MpInformazioniGeneraliPage,
    MpContattiPage,
    MpLeAreeMusealiPage,
    MmPercorsiATemaPage,
    MmMostrePage,
    TestCalendarPage,
    EventiCalendarioPage
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
    LaunchNavigator,
    Instagram,
    Camera,
    Market,
    Calendar
  ]
})
export class AppModule {}

