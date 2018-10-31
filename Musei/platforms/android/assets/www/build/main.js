webpackJsonp([3],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContentPage = /** @class */ (function () {
    function ContentPage(navCtrl, navParams, tts, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
    }
    ContentPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaContent');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
        idCardContenuto.innerHTML = this.myContenuto;
        this.menuCtrl.enable(false, "menuPrincipale");
        this.menuCtrl.enable(true, "menuMuseo");
    };
    //Apre il side menu
    ContentPage.prototype.openMenu = function () {
        this.menuCtrl.open("menuMuseo");
    };
    ContentPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("museoDescrizione").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    ContentPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    ContentPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        //Riabilito il menu principale e disabilito quello specifico del museo
        this.menuCtrl.enable(true, "menuPrincipale");
        this.menuCtrl.enable(false, "menuMuseo");
    };
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/content/content.html"*/'<ion-content id="paginaContent" class="card-background-page">\n	<ion-card class="headerContent">\n		<button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home"></ion-icon>\n		</button>\n    <div class="card-title" id="content_cardTitle">\n\n		</div>\n  </ion-card>\n  <ion-card>\n    <div class="content-content" id="contenuto">\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/content/content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MuseiPage = /** @class */ (function () {
    function MuseiPage(navCtrl, navParams, museiService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.museiService = museiService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.musei = this.navParams.get('musei');
        this.classeArea = this.navParams.get('classe1');
    }
    //Richiama il metodo che recupera i dati del museo quando clicco sil div del museo
    MuseiPage.prototype.findMuseo = function (string) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Caricamento dati museo..."
        });
        loading.present();
        var options = {
            NOME: string
        };
        this.museiService.getDatiMusei(options).then(function (data) {
            loading.dismiss();
            if (typeof (data[0]) === "undefined") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Errore imprevisto!',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                if (_this.classeArea === "area_artemoderna") {
                    switch (string) {
                        case "MAMbo":
                            _this.classMuseoArea = "museo_mambo";
                            break;
                        default:
                            _this.classMuseoArea = string;
                    }
                }
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__museo_museo__["a" /* MuseoPage */], { musei: data, classe1: _this.classMuseoArea });
                _this.navCtrl.removeView(_this.navCtrl.last());
                console.log(_this.classMuseoArea);
            }
        });
    };
    //evento che scatta al caricamento della pagina musei, serve a impostare le classi in modo dinamico nel css
    MuseiPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaArea');
        idClass.classList.remove(this.classeArea);
        idClass.classList.add(this.classeArea);
    };
    //Associato al tasto per tornare all'home page.
    MuseiPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        //Ho notato che ogni volta viene creata il tag di una pagina musei o museo. Bisogna gestire il fatto di utilizzare sempre e solo una pagina per area e museo, in modo da non creare n. pagine.
        //var idRemovePage = document.getElementById('paginaArea');
        //idRemovePage.parentNode.removeChild(idRemovePage);
    };
    MuseiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musei',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/'<ion-content id="paginaArea" class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row id="row-1" class="rowHome">\n        <ion-col class="colHomeYellow">\n			<button class="back-musei" ion-button icon-only (click)="goHomePage()"><ion-icon name="arrow-back"></ion-icon></button>\n			<ion-card class="cardHome" (click)="findMuseo(musei[0].NOME)">\n    			<div class="card-title">{{musei[0].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-2" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[1].NOME)">\n    			<div class="card-title">{{musei[1].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-3" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[2].NOME)">\n    			<div class="card-title">{{musei[2].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-4" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[3].NOME)">\n    			<div class="card-title">{{musei[3].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MuseiPage);
    return MuseiPage;
}());

//# sourceMappingURL=musei.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/content/content.module": [
		279,
		2
	],
	"../pages/musei/musei.module": [
		280,
		1
	],
	"../pages/museo/museo.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Splash = /** @class */ (function () {
    function Splash(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    Splash.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 3000);
    };
    Splash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/splash/splash.html"*/'<ion-content>\n \n    <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n        <defs>\n            <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n        </defs>\n        <title>Musei Bologna</title>\n        <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n        <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n        <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n        <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n    </svg>\n \n</ion-content>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_musei_musei__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_museo_museo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_content_content__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_10__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_museo_museo__["a" /* MuseoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_content_content__["a" /* ContentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/musei/musei.module#MuseiPageModule', name: 'MuseiPage', segment: 'musei', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/museo/museo.module#MuseoPageModule', name: 'MuseoPage', segment: 'museo', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_10__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_museo_museo__["a" /* MuseoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_content_content__["a" /* ContentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(socialSharing, platform, statusBar, splashScreen, modalCtrl, menuCtrl, events, diagnostic, geolocation) {
        this.socialSharing = socialSharing;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (service) {
        var _this = this;
        console.log(service);
        switch (service) {
            case "SocialService":
                this.socialSharing.canShareVia("instagram").then(function () {
                    _this.socialSharing.shareViaInstagram("Museo Archeologia", null);
                }).catch(function (err) {
                    alert("Errore! Non sono riuscito a connettermi con il social.");
                });
                break;
            case "InformazioniService":
                this.events.publish('info');
                break;
            case "OrariService":
                this.events.publish('orari');
                break;
            case "BigliettiService":
                this.events.publish('biglietti');
                break;
            case "MuseoPiuVicinoService":
                this.diagnostic.isLocationAvailable().then(function (success) {
                    alert("Location: " + success);
                }).catch(function (error) {
                    alert(error);
                });
                this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log("Longitudine: " + resp.coords.longitude + " Latitudine: " + resp.coords.latitude);
                    var distance = _this.calculateDistance(resp.coords.latitude, resp.coords.longitude);
                    //alert("Distanza: " + distance);
                }).catch(function (error) {
                    alert('Errore! Non sono riuscito a recuperare la posizione attuale');
                });
                break;
            default:
                break;
        }
        this.menuCtrl.close();
    };
    MyApp.prototype.calculateDistance = function (latitudineIniziale, longitudineIniziale) {
        //var musei = [[44.5042144, 11.3442351], [44.4947301, 11.3443067]]
        var musei = [{
                "museo": "Stazione",
                "latitudine": "44.5042144",
                "longitudine": "11.3442351"
            },
            {
                "museo": "Apple Store",
                "latitudine": "44.4947301",
                "longitudine": "11.3443067"
            }];
        var R = 6371e3; // metres
        var distanzaMinore = 0;
        var museo;
        for (var key in musei) {
            var φ1 = this.toRad(latitudineIniziale);
            var φ2 = this.toRad(musei[key].latitudine);
            var Δφ = this.toRad(musei[key].latitudine - latitudineIniziale);
            var Δλ = this.toRad(musei[key].longitudine - longitudineIniziale);
            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            if (d < distanzaMinore || distanzaMinore === 0) {
                distanzaMinore = d;
                museo = musei[key].museo;
            }
        }
        //alert("Meglio andare a: " + museo);
        //return d;
    };
    MyApp.prototype.toRad = function (Value) {
        return Value * Math.PI / 180;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/'<ion-menu [content]="mycontent" id="menuPrincipale">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="contact" item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)="onLoad(\'MuseoPiuVicinoService\')">\n                <ion-icon name="walk" item-left></ion-icon>\n                Il museo più vicino a te\n            </button>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="information-circle" item-left></ion-icon>\n                Informazioni generali\n            </button>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="chatbubbles" item-left></ion-icon>\n                Contatti\n            </button>      \n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-menu [content]="mycontent" id="menuMuseo">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="contact" item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)="onLoad(\'InformazioniService\')">\n                <ion-icon name="information-circle" item-left></ion-icon>\n                Informazioni\n            </button>\n            <button ion-item (click)="onLoad(\'OrariService\')">\n                <ion-icon name="alarm" item-left></ion-icon>\n                Orari\n            </button>\n            <button ion-item (click)="onLoad(\'BigliettiService\')">\n                <ion-icon name="paper" item-left></ion-icon>\n                Biglietti\n            </button>\n            <button ion-item (click)=onLoad(NewsService)>\n                <ion-icon name="paper-plane" item-left></ion-icon>\n                News\n            </button>\n            <button ion-item (click)=onLoad(IndicazioniService)>\n                <ion-icon name="pin" item-left></ion-icon>\n                Come raggiungerci\n            </button>\n            <button ion-item (click)="onLoad(\'SocialService\')">\n                <ion-icon name="logo-facebook" item-left></ion-icon>\n                Condivisione Social\n            </button>\n            <button ion-item (click)=onLoad(PercorsiService)>\n                <ion-icon name="git-compare" item-left></ion-icon>\n                Percorsi Trasversali\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musei_musei__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, museiService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.museiService = museiService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    //Richiama il metodo che restituisce i musei associati ad un'area
    HomePage.prototype.findMusei = function (string, isActive) {
        var _this = this;
        console.log(isActive);
        if (isActive == false) {
            var alertNotActive = this.alertCtrl.create({
                title: 'Coming soon...',
                buttons: ['OK']
            });
            alertNotActive.present();
        }
        else {
            //spinner loading
            var spinnerLoading_1 = this.loadingCtrl.create({
                dismissOnPageChange: true
            });
            spinnerLoading_1.present();
            var options = {
                AREA: string
            };
            this.museiService.startRicercaMusei(options).then(function (data) {
                if (typeof (data[0]) === "undefined") {
                    spinnerLoading_1.dismiss();
                    //se non ho dati faccio dismiss dello spinner e lancio il messaggio di errore
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Errore imprevisto!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    //Se ho soltanto un dato in posizione 0 vado alla pagina del museo direttamente perche' ho un solo museo trovato. Assegno le classi per museo con nomenclatura "museo_abbreviazionenomemuseo"
                    if (typeof (data[1]) === "undefined") {
                        switch (string) {
                            /*
                                case "Archeologia":
                                this.classMuseo = "museo_archeologia";
                                isActive = true;
                                break;
                             */
                            case "Musica":
                                _this.classMuseo = "museo_musica";
                                break;
                            default:
                                _this.classMuseo = string;
                        }
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__museo_museo__["a" /* MuseoPage */], { musei: data, classe1: _this.classMuseo });
                        console.log(_this.classMuseo);
                    }
                    else {
                        //Altrimenti vado alla pagina dei musei dell'Area. Assegno le classi per area con nomenclatura "area_abbreviazionenomearea"
                        switch (string) {
                            case "Arte moderna e contemporanea":
                                _this.classArea = "area_artemoderna";
                                break;
                            default:
                                _this.classArea = string;
                        }
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__musei_musei__["a" /* MuseiPage */], { musei: data, classe1: _this.classArea });
                        console.log(_this.classArea);
                    }
                }
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/'<ion-content class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-archeologia" class="cardHome" (click)="findMusei(\'Archeologia\', false)" style="background-color: SaddleBrown">\n        <div class="card-gradient">\n    			<div class="card-title">Archeologia</div>\n        </div>\n  		 </ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n			<ion-card id="card-arteantica" class="cardHome" (click)="findMusei(\'Arte antica\', false)" style="background-color: red">\n        <div class="card-gradient">\n    			<div class="card-title">Arte antica</div>\n        </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-artemoderna" class="cardHome" (click)="findMusei(\'Arte moderna e contemporanea\', false)" style="background-color: Violet">\n        <div class="card-gradient">\n    			<div class="card-title">Arte moderna e contemporanea</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-musica" class="cardHome" (click)="findMusei(\'Musica\', true)" style="background-color: RebeccaPurple">\n            <div class="card-gradient">\n    			    <div class="card-title">Musica</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-patrimonioindustriale" class="cardHome" (click)="findMusei(\'Patrimonio industriale e cultura tecnica\', false)" style="background-color: RoyalBlue">\n        <div class="card-gradient">\n    			<div class="card-title">Patrimonio industriale e Cultura tecnica</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-storiaememoria" class="cardHome" (click)="findMusei(\'Storia e Memoria\', false)" style="background-color: SeaGreen">\n            <div class="card-gradient">\n    			       <div class="card-title">Storia e Memoria</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MuseoPage = /** @class */ (function () {
    function MuseoPage(menuCtrl, nav, navParams, tts, events) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.tts = tts;
        this.events = events;
        this.museo = this.navParams.get('musei');
        this.classeMuseo = this.navParams.get('classe1');
        this.events.subscribe('info', function (data) {
            console.log(_this.museo[0].INFO);
            _this.openInfo(_this.museo[0].INFO);
        });
        this.events.subscribe('orari', function (data) {
            console.log(_this.museo[0].ORARI);
        });
        this.events.subscribe('biglietti', function (data) {
            console.log(_this.museo[0].BIGLIETTI);
        });
    }
    MuseoPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaMuseo');
        idClass.classList.add(this.classeMuseo);
        var idCardDescrizione = document.getElementById('descrizione');
        idCardDescrizione.innerHTML = this.museo[0].DESCRIZIONE;
        //calcolo altezza contenitore descrizione museo
        var idCardTitle = document.getElementById('museo_cardTitle');
        idCardDescrizione.style.height = idCardTitle.offsetHeight - idCardDescrizione.offsetTop + "px";
        //console.log(idCardTitle.offsetTop, idCardTitle.offsetHeight);
        //Disabilito il menu principale e abilito quello specifico del museo
        this.menuCtrl.enable(false, "menuPrincipale");
        this.menuCtrl.enable(true, "menuMuseo");
    };
    //Apre il side menu
    MuseoPage.prototype.openMenu = function () {
        this.menuCtrl.open("menuMuseo");
    };
    MuseoPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("museoDescrizione").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MuseoPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MuseoPage.prototype.goHomePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.nav.removeView(this.nav.last());
        //Riabilito il menu principale e disabilito quello specifico del museo
        this.menuCtrl.enable(true, "menuPrincipale");
        this.menuCtrl.enable(false, "menuMuseo");
    };
    MuseoPage.prototype.openInfo = function (info) {
        console.log(info);
        console.log(this.classeMuseo);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__content_content__["a" /* ContentPage */], { voceMenu: 'INFORMAZIONI', contenuto: info, museoClass: this.classeMuseo, contentClass: 'content_informazioni' });
        this.nav.removeView(this.nav.last());
    };
    MuseoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-museo',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/'<ion-content id="paginaMuseo" class="card-background-page">\n	<ion-card class="cardHome" style="background-color: yellow">\n		<button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home"></ion-icon>\n		</button>\n    	<div class="card-title" id="museo_cardTitle">{{museo[0].NOME}}\n				<div class="museo-content" id="descrizione">\n				</div>\n			</div>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MuseoPage);
    return MuseoPage;
}());

//# sourceMappingURL=museo.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RicercaMuseiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RicercaMuseiProvider = /** @class */ (function () {
    function RicercaMuseiProvider(http) {
        this.http = http;
    }
    //Data un'area, ricerca i musei associati
    RicercaMuseiProvider.prototype.startRicercaMusei = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://www.omniservicetest.it/node/Musei/api/musei', JSON.stringify(options), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    //Restituisce i dati del museo selezionato
    RicercaMuseiProvider.prototype.getDatiMusei = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://www.omniservicetest.it/node/Musei/api/museo', JSON.stringify(options), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RicercaMuseiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RicercaMuseiProvider);
    return RicercaMuseiProvider;
}());

//# sourceMappingURL=ricerca-musei.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map