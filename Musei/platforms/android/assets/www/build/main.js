webpackJsonp([2],{

/***/ 104:
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
                console.log(_this.classMuseoArea);
            }
        });
    };
    //evento che scatta al caricamento della pagina musei, serve a impostare le classi in modo dinamico nel css
    MuseiPage.prototype.ionViewDidLoad = function () {
        console.log(this.classeArea);
        var idClass = document.getElementById('paginaArea');
        console.log(idClass.classList.contains(this.classeArea));
        idClass.classList.add(this.classeArea);
        console.log(idClass.classList.contains(this.classeArea));
    };
    //Associato al tasto per tornare all'home page.
    MuseiPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        //Ho notato che ogni volta viene creata il tag di una pagina musei o museo. Bisogna gestire il fatto di utilizzare sempre e solo una pagina per area e museo, in modo da non creare n. pagine.
        //var idRemovePage = document.getElementById('paginaArea');
        //idRemovePage.parentNode.removeChild(idRemovePage);
    };
    MuseiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musei',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/'<ion-content id="paginaArea" class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row id="row-1" class="rowHome">\n        <ion-col class="colHomeYellow">\n			<button class="back-musei" ion-button icon-only (click)="goHomePage()"><ion-icon name="arrow-back"></ion-icon></button>\n			<ion-card class="cardHome" (click)="findMuseo(musei[0].NOME)">\n    			<div class="card-title">{{musei[0].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-2" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[1].NOME)">\n    			<div class="card-title">{{musei[1].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-3" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[2].NOME)">\n    			<div class="card-title">{{musei[2].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-4" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[3].NOME)">\n    			<div class="card-title">{{musei[3].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MuseiPage);
    return MuseiPage;
}());

//# sourceMappingURL=musei.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/musei/musei.module": [
		275,
		1
	],
	"../pages/museo/museo.module": [
		276,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_musei_musei__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_museo_museo__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(157);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_9__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_museo_museo__["a" /* MuseoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/musei/musei.module#MuseiPageModule', name: 'MuseiPage', segment: 'musei', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/museo/museo.module#MuseoPageModule', name: 'MuseoPage', segment: 'museo', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_9__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_museo_museo__["a" /* MuseoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(199);
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
    function MyApp(socialSharing, platform, statusBar, splashScreen, modalCtrl, menuCtrl) {
        this.socialSharing = socialSharing;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (string) {
        var _this = this;
        console.log(string);
        if (string == "Social") {
            this.socialSharing.canShareVia("instagram").then(function () {
                _this.socialSharing.shareViaInstagram("Museo Archeologia", null);
                //this.page = HomePage;
                //this.nav.push(this.page);
            }).catch(function (err) {
                alert(err);
            });
        }
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/'<ion-menu [content]="mycontent">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="contact" item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)=onLoad(CollezioniService)>\n                <ion-icon name="color-palette" item-left></ion-icon>\n                Collezioni\n            </button>\n            <button ion-item (click)=onLoad(NewsService)>\n                <ion-icon name="paper-plane" item-left></ion-icon>\n                News\n            </button>\n            <button ion-item (click)=onLoad(OrariService)>\n                <ion-icon name="alarm" item-left></ion-icon>\n                Orari\n            </button>\n            <button ion-item (click)=onLoad(IndicazioniService)>\n                <ion-icon name="pin" item-left></ion-icon>\n                Come raggiungerci\n            </button>\n            <button ion-item (click)="onLoad(\'Social\')">\n                <ion-icon name="logo-facebook" item-left></ion-icon>\n                Condivisione Social\n            </button>\n            <button ion-item (click)=onLoad(PercorsiService)>\n                <ion-icon name="git-compare" item-left></ion-icon>\n                Percorsi Trasversali\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musei_musei__ = __webpack_require__(104);
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
                    switch (string) {
                        case "Archeologia":
                            _this.classMuseo = "museo_archeologia";
                            break;
                        default:
                            _this.classMuseo = string;
                    }
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__museo_museo__["a" /* MuseoPage */], { musei: data, classe1: _this.classMuseo });
                    console.log(_this.classMuseo);
                }
                else {
                    //Altrimenti vado alla pagina dei musei
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
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/'<ion-content class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-archeologia" class="cardHome" (click)="findMusei(\'Archeologia\')" style="background-color: SaddleBrown">\n        <div class="card-gradient">\n    			<div class="card-title">Archeologia</div>\n        </div>\n  		 </ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n			<ion-card id="card-arteantica" class="cardHome" (click)="findMusei(\'Arte antica\')" style="background-color: red">\n        <div class="card-gradient">\n    			<div class="card-title">Arte antica</div>\n        </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-artemoderna" class="cardHome" (click)="findMusei(\'Arte moderna e contemporanea\')" style="background-color: Violet">\n        <div class="card-gradient">\n    			<div class="card-title">Arte moderna e contemporanea</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-musica" class="cardHome" (click)="findMusei(\'Musica\')" style="background-color: RebeccaPurple">\n            <div class="card-gradient">\n    			    <div class="card-title">Musica</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-patrimonioindustriale" class="cardHome" (click)="findMusei(\'Patrimonio industriale e cultura tecnica\')" style="background-color: RoyalBlue">\n        <div class="card-gradient">\n    			<div class="card-title">Patrimonio industriale e Cultura tecnica</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-storiaememoria" class="cardHome" (click)="findMusei(\'Storia e Memoria\')" style="background-color: SeaGreen">\n            <div class="card-gradient">\n    			       <div class="card-title">Storia e Memoria</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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
        this.classeMuseo = this.navParams.get('classe1');
    }
    MuseoPage.prototype.ionViewDidLoad = function () {
        console.log(this.classeMuseo);
        var idClass = document.getElementById('paginaMuseo');
        idClass.classList.add(this.classeMuseo);
    };
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
            selector: 'page-museo',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/'<ion-content id="paginaMuseo" class="card-background-page">\n	<ion-card class="cardHome" style="background-color: yellow">\n		<button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<button class="home-button"ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home"></ion-icon>\n		</button>\n    	<div class="card-title">{{museo[0].NOME}}\n				<div class="museo-content">\n					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n				</div>\n			</div>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(249);
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

},[201]);
//# sourceMappingURL=main.js.map