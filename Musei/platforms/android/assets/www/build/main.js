webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(79);
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
    }
    //Richiama il metodo che recupera i dati del museo
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
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__museo_museo__["a" /* MuseoPage */], { musei: data });
            }
        });
    };
    //Associato al tasto per tornare all'home page
    MuseiPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MuseiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musei',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/'<ion-content class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row class="rowHome">\n        <ion-col class="colHomeYellow">\n			<button class="back-musei" ion-button icon-only (click)="goHomePage()"><ion-icon name="arrow-back"></ion-icon></button>\n			<ion-card class="cardHome" (click)="findMuseo(musei[0].NOME)" style="background-color: yellow">	\n    			<div class="card-title-home">{{musei[0].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[1].NOME)" style="background-color: blue">\n    			<div class="card-title">{{musei[1].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[2].NOME)" style="background-color: red">\n    			<div class="card-title">{{musei[2].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[3].NOME)" style="background-color: green">\n    			<div class="card-title">{{musei[3].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MuseiPage);
    return MuseiPage;
}());

//# sourceMappingURL=musei.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/musei/musei.module": [
		274,
		1
	],
	"../pages/museo/museo.module": [
		275,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(101);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_musei_musei__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_museo_museo__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(156);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_8__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_museo_museo__["a" /* MuseoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/musei/musei.module#MuseiPageModule', name: 'MuseiPage', segment: 'musei', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/museo/museo.module#MuseoPageModule', name: 'MuseoPage', segment: 'museo', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_8__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_museo_museo__["a" /* MuseoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(199);
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
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/'<ion-menu [content]="mycontent">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)=onLoad(ServicesMessPage)>\n                <ion-icon name="contact" item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)=onLoad(ServicesLaundryPage)>\n                <ion-icon name="color-palette" item-left></ion-icon>\n                Collezioni\n            </button>\n            <button ion-item (click)=onLoad(ServicesLaundryPage)>\n                <ion-icon name="paper-plane" item-left></ion-icon>\n                News\n            </button>\n            <button ion-item (click)=onLoad(ServicesLaundryPage)>\n                <ion-icon name="alarm" item-left></ion-icon>\n                Orari\n            </button>\n            <button ion-item (click)=onLoad(ServicesLaundryPage)>\n                <ion-icon name="pin" item-left></ion-icon>\n                Come raggiungerci\n            </button>\n            <button ion-item (click)=onLoad(ServicesLaundryPage)>\n                <ion-icon name="logo-facebook" item-left></ion-icon>\n                Condivisione Social\n            </button>\n            <button ion-item (click)=onLoad(ServicesLaundryPage)>\n                <ion-icon name="git-compare" item-left></ion-icon>\n                Percorsi Trasversali\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musei_musei__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(79);
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
    HomePage.prototype.findMusei = function (string) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Caricamento musei..."
        });
        loading.present();
        var options = {
            AREA: string
        };
        this.museiService.startRicercaMusei(options).then(function (data) {
            loading.dismiss();
            if (typeof (data[0]) === "undefined") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Errore imprevisto!',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                //Se ho soltanto un dato in posizione 0 vado alla pagina del museo direttamente perche' ho un solo museo trovato
                if (typeof (data[1]) === "undefined") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__museo_museo__["a" /* MuseoPage */], { musei: data });
                }
                else {
                    //Altrimenti vado alla pagina dei musei
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__musei_musei__["a" /* MuseiPage */], { musei: data });
                }
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/'<ion-content class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-archeologia" class="cardHome" (click)="findMusei(\'Archeologia\')" style="background-color: SaddleBrown">\n        <div class="card-gradient">\n    			<div class="card-title">Archeologia</div>\n        </div>\n  		 </ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n			<ion-card id="card-arteantica" class="cardHome" (click)="findMusei(\'Arte antica\')" style="background-color: red">\n        <div class="card-gradient">\n    			<div class="card-title">Arte antica</div>\n        </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-artemoderna" class="cardHome" (click)="findMusei(\'Arte moderna e contemporanea\')" style="background-color: Violet">\n        <div class="card-gradient">\n    			<div class="card-title">Arte moderna e contemporanea</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-musica" class="cardHome" (click)="findMusei(\'Musica\')" style="background-color: RebeccaPurple">\n            <div class="card-gradient">\n    			    <div class="card-title">Musica</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-patrimonioindustriale" class="cardHome" (click)="findMusei(\'Patrimonio industriale e cultura tecnica\')" style="background-color: RoyalBlue">\n        <div class="card-gradient">\n    			<div class="card-title">Patrimonio industriale e Cultura tecnica</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-storiaememoria" class="cardHome" (click)="findMusei(\'Storia e Memoria\')" style="background-color: SeaGreen">\n            <div class="card-gradient">\n    			       <div class="card-title">Storia e Memoria</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
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
    function MuseoPage(menuCtrl, nav, navParams) {
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.museo = this.navParams.get('musei');
    }
    //Apre il side menu
    MuseoPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    //Associato al tasto per tornare all'home page
    MuseoPage.prototype.goHomePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MuseoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-museo',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/'<ion-content class="card-background-page">\n	<ion-card class="cardHome" style="background-color: yellow">\n		<button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home"></ion-icon>\n		</button>\n    	<div class="card-title">{{museo[0].NOME}}</div>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MuseoPage);
    return MuseoPage;
}());

//# sourceMappingURL=museo.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RicercaMuseiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
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
    //Data un'area ricerca i musei associati
    RicercaMuseiProvider.prototype.startRicercaMusei = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://192.168.3.37:3000/api/musei', JSON.stringify(options), { headers: headers })
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
            _this.http.post('http://192.168.3.37:3000/api/museo', JSON.stringify(options), { headers: headers })
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

},[200]);
//# sourceMappingURL=main.js.map