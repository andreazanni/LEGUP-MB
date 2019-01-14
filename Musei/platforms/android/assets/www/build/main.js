webpackJsonp([23],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventiCalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(85);
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
 * Generated class for the EventiCalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventiCalendarioPage = /** @class */ (function () {
    function EventiCalendarioPage(navCtrl, navParams, alertCtrl, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
        this.event = { title: "", location: "", message: "", startDate: "", endDate: "" };
    }
    EventiCalendarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventiCalendarioPage');
    };
    EventiCalendarioPage.prototype.save = function () {
        var _this = this;
        this.calendar.createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(function (msg) {
            var alert = _this.alertCtrl.create({
                title: 'Success!',
                subTitle: 'Event saved successfully',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.pop();
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Failed!',
                subTitle: err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    EventiCalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventi-calendario',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/eventi-calendario/eventi-calendario.html"*/'<!--\n  Generated template for the EventiCalendarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EventiCalendario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="save()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="event.title" name="event.title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Location</ion-label>\n        <ion-input type="text" [(ngModel)]="event.location" name="event.location"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-input type="text" [(ngModel)]="event.message" name="event.message"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Start Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="event.startDate" name="event.startDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>End Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="event.endDate" name="event.endDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" full round>Save</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/eventi-calendario/eventi-calendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
    ], EventiCalendarioPage);
    return EventiCalendarioPage;
}());

//# sourceMappingURL=eventi-calendario.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
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
 * Generated class for the EventiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventiPage = /** @class */ (function () {
    function EventiPage(navCtrl, navParams, tts, menuCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.myContenuto = this.navParams.get('eventi');
    }
    EventiPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaEventi');
        document.getElementById('content_cardTitle').innerText = "EVENTI";
        document.getElementById('content_cardSubTitle').innerText = "ISTITUZIONE BOLOGNA MUSEI";
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    EventiPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    EventiPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.goHomePage();
        });
    };
    EventiPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    EventiPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    EventiPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    EventiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventi',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/eventi/eventi.html"*/'<ion-content id="paginaEventi" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/eventi/eventi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], EventiPage);
    return EventiPage;
}());

//# sourceMappingURL=eventi.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmInformazioniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmInformazioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmInformazioniPage = /** @class */ (function () {
    function MmInformazioniPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmInformazioniPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmInformazioni');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmInformazioniPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmInformazioniPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmInformazioniPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "InformazioniService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmInformazioniPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmInformazioniPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmInformazioniPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmInformazioniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-informazioni',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-informazioni/mm-informazioni.html"*/'<ion-content id="paginaMmInformazioni" class="card-background-page">\n	<ion-card id="content-header" class="headerContent">\n		<button class="sideMenu" ion-button (click)="openMenu()">\n			<ion-icon name="menu" id="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic" id="vocal"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off" id="vocal-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-informazioni/mm-informazioni.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmInformazioniPage);
    return MmInformazioniPage;
}());

//# sourceMappingURL=mm-informazioni.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmOrariPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmOrariPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmOrariPage = /** @class */ (function () {
    function MmOrariPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmOrariPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmOrari');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        ;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmOrariPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmOrariPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmOrariPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "OrariService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmOrariPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmOrariPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmOrariPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmOrariPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-orari',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-orari/mm-orari.html"*/'<ion-content id="paginaMmOrari" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic" id="vocal"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home" id="home-icon"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n        <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content">\n      <div id="container-contenuto">\n        <div id="contenuto" class="content-content animated fadeInUp slow">\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-orari/mm-orari.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmOrariPage);
    return MmOrariPage;
}());

//# sourceMappingURL=mm-orari.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmBigliettiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmBigliettiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmBigliettiPage = /** @class */ (function () {
    function MmBigliettiPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmBigliettiPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmBiglietti');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmBigliettiPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmBigliettiPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmBigliettiPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "BigliettiService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmBigliettiPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmBigliettiPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmBigliettiPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmBigliettiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-biglietti',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-biglietti/mm-biglietti.html"*/'<ion-content id="paginaMmBiglietti" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic" id="vocal"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home" id="home-icon"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n        <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content ">\n      <div id="container-contenuto">\n        <div id="contenuto" class="content-content animated fadeInUp slow">\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-biglietti/mm-biglietti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmBigliettiPage);
    return MmBigliettiPage;
}());

//# sourceMappingURL=mm-biglietti.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmIlPalazzoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmIlPalazzoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmIlPalazzoPage = /** @class */ (function () {
    function MmIlPalazzoPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmIlPalazzoPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmIlPalazzo');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmIlPalazzoPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmIlPalazzoPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmIlPalazzoPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "PalazzoService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmIlPalazzoPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmIlPalazzoPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmIlPalazzoPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmIlPalazzoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-il-palazzo',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-il-palazzo/mm-il-palazzo.html"*/'<ion-content id="paginaMmIlPalazzo" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic" id="vocal"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home" id="home-icon"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n        <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content">\n      <div id="container-contenuto">\n        <div id="contenuto" class="content-content animated fadeInUp slow">\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-il-palazzo/mm-il-palazzo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmIlPalazzoPage);
    return MmIlPalazzoPage;
}());

//# sourceMappingURL=mm-il-palazzo.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmLeCollezioniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmLeCollezioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmLeCollezioniPage = /** @class */ (function () {
    function MmLeCollezioniPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmLeCollezioniPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmLeCollezioni');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmLeCollezioniPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmLeCollezioniPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmLeCollezioniPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "CollezioniService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmLeCollezioniPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmLeCollezioniPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmLeCollezioniPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmLeCollezioniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-le-collezioni',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-le-collezioni/mm-le-collezioni.html"*/'<ion-content id="paginaMmLeCollezioni" class="card-background-page">\n	<ion-card id="content-header" class="headerContent">\n		<button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n			<ion-icon name="menu" id="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic" id="vocal"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off" id="vocal-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-le-collezioni/mm-le-collezioni.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmLeCollezioniPage);
    return MmLeCollezioniPage;
}());

//# sourceMappingURL=mm-le-collezioni.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmLaBibliotecaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmLaBibliotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmLaBibliotecaPage = /** @class */ (function () {
    function MmLaBibliotecaPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmLaBibliotecaPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmLaBiblioteca');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmLaBibliotecaPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmLaBibliotecaPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmLaBibliotecaPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "BibliotecaService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmLaBibliotecaPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmLaBibliotecaPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmLaBibliotecaPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmLaBibliotecaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-la-biblioteca',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-la-biblioteca/mm-la-biblioteca.html"*/'<ion-content id="paginaMmLaBiblioteca" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-la-biblioteca/mm-la-biblioteca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmLaBibliotecaPage);
    return MmLaBibliotecaPage;
}());

//# sourceMappingURL=mm-la-biblioteca.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmComeRaggiungerciPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MmComeRaggiungerciPage = /** @class */ (function () {
    function MmComeRaggiungerciPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform, diagnostic, launchNavigator, alertCtrl, geolocation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.launchNavigator = launchNavigator;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
        this.creaAlerts();
    }
    MmComeRaggiungerciPage.prototype.creaAlerts = function () {
        var _this = this;
        //Preparo tutti i popup da mostrare
        this.alertAuthorized = this.alertCtrl.create({
            title: "Si prega di autorizzare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.alertAperti = false;
                        _this.creaAlerts();
                    }
                }
            ]
        });
        this.alertEnabled = this.alertCtrl.create({
            title: "Si prega di abilitare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.alertAperti = false;
                        _this.creaAlerts();
                    }
                }
            ]
        });
        this.alertFinale = this.alertCtrl.create({
            title: "Purtroppo non sono riuscito a localizzare il tuo dispositivo.",
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.alertAperti = false;
                        _this.creaAlerts();
                    }
                }
            ]
        });
    };
    MmComeRaggiungerciPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmComeRaggiungerci');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var divItem = document.createElement('div');
        divItem.className = 'contenuto';
        idCardContenuto.appendChild(divItem);
        divItem.appendChild(document.getElementById('descrizione-iniziale'));
        divItem.appendChild(document.getElementById('bottone'));
        divItem.appendChild(document.getElementById('descrizione-finale'));
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmComeRaggiungerciPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmComeRaggiungerciPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            if (_this.alertAperti) {
                _this.alertAuthorized.dismiss();
                _this.alertEnabled.dismiss();
                _this.alertFinale.dismiss();
                _this.alertAperti = false;
                _this.creaAlerts();
            }
            else {
                _this.stopRead();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
                _this.navCtrl.removeView(_this.navCtrl.last());
            }
        });
    };
    //Apre il side menu
    MmComeRaggiungerciPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "IndicazioniService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmComeRaggiungerciPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmComeRaggiungerciPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmComeRaggiungerciPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    //Metodo chiamato dal pulsante che va ad aprire l'app di navigazione
    MmComeRaggiungerciPage.prototype.calcolaPercorso = function () {
        var _this = this;
        this.stopRead();
        //Parte un loader per mascherare il calcolo in background del museo piu vicino
        var spinnerLoading = this.loadingCtrl.create();
        spinnerLoading.present();
        //Per prima cosa controllo se è stata autorizzata la localizzazione
        this.diagnostic.isLocationAuthorized().then(function () {
            //Poi controllo se la localizzazione è abilitata
            _this.diagnostic.isLocationEnabled().then(function (response) {
                if (response) {
                    //Rilevo la posizione e do 20 secondi di tempo per farcela
                    _this.geolocation.getCurrentPosition({ timeout: 20000 }).then(function (resp) {
                        spinnerLoading.dismiss();
                        var destination = [_this.myMuseo[0].LATITUDINE, _this.myMuseo[0].LONGITUDINE];
                        var options = {
                            start: [resp.coords.latitude, resp.coords.longitude],
                            transportMode: "walking",
                            appSelection: {
                                dialogHeaderText: "Seleziona l'app che preferisci utilizzare.",
                                cancelButtonText: "Ritorna all'applicazione.",
                                rememberChoice: {
                                    prompt: {
                                        headerText: "Ricorda questa scelta",
                                        bodyText: "Desideri utilizzare sempre questa app?",
                                        yesButtonText: "SI'",
                                        noButtonText: "NO"
                                    }
                                }
                            },
                        };
                        //Avvio l'app di calcolo percorso
                        _this.launchNavigator.navigate(destination, options)
                            .then()
                            .catch(function () {
                            _this.alertFinale.present();
                            _this.alertFinale.onDidDismiss(function () {
                                _this.creaAlerts();
                            });
                            _this.alertAperti = true;
                        });
                    }).catch(function () {
                        spinnerLoading.dismiss();
                        _this.alertFinale.present();
                        _this.alertFinale.onDidDismiss(function () {
                            _this.creaAlerts();
                        });
                        _this.alertAperti = true;
                    });
                }
                else {
                    spinnerLoading.dismiss();
                    _this.alertEnabled.present();
                    _this.alertEnabled.onDidDismiss(function () {
                        _this.creaAlerts();
                    });
                    _this.alertAperti = true;
                }
            }).catch(function () {
                spinnerLoading.dismiss();
                _this.alertEnabled.present();
                _this.alertEnabled.onDidDismiss(function () {
                    _this.creaAlerts();
                });
                _this.alertAperti = true;
            });
        }).catch(function () {
            spinnerLoading.dismiss();
            _this.alertAuthorized.present();
            _this.alertAuthorized.onDidDismiss(function () {
                _this.creaAlerts();
            });
            _this.alertAperti = true;
        });
    };
    MmComeRaggiungerciPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-come-raggiungerci',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-come-raggiungerci/mm-come-raggiungerci.html"*/'<ion-content id="paginaMmComeRaggiungerci" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic" id="vocal"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home" id="home-icon"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n        <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content">\n      <div id="container-contenuto" class="container animated fadeInUp slow">\n        <div id="bottone">\n          <button class="portami-class" id="portami-button" ion-button (click)="calcolaPercorso()">\n              <ion-icon id="pin" name="pin"></ion-icon>\n              &nbsp;\n              Portami al Museo\n          </button>\n          <br><br>\n        </div>\n        <div id="contenuto" class="content-content"></div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-come-raggiungerci/mm-come-raggiungerci.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MmComeRaggiungerciPage);
    return MmComeRaggiungerciPage;
}());

//# sourceMappingURL=mm-come-raggiungerci.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmEventiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmEventiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmEventiPage = /** @class */ (function () {
    function MmEventiPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmEventiPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmEventi');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmEventiPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmEventiPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmEventiPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "EventiService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmEventiPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmEventiPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmEventiPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmEventiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-eventi',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-eventi/mm-eventi.html"*/'<ion-content id="paginaMmEventi" class="card-background-page">\n	<ion-card id="content-header" class="headerContent">\n		<button class="sideMenu" ion-button (click)="openMenu()">\n			<ion-icon name="menu" id="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic" id="vocal"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off" id="vocal-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-eventi/mm-eventi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmEventiPage);
    return MmEventiPage;
}());

//# sourceMappingURL=mm-eventi.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmContattiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmContattiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmContattiPage = /** @class */ (function () {
    function MmContattiPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmContattiPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmContatti');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmContattiPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmContattiPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmContattiPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "ContattiService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmContattiPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmContattiPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmContattiPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmContattiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-contatti',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-contatti/mm-contatti.html"*/'<ion-content id="paginaMmContatti" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-contatti/mm-contatti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmContattiPage);
    return MmContattiPage;
}());

//# sourceMappingURL=mm-contatti.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmCondivisioneSocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_instagram__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__ = __webpack_require__(188);
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
 * Generated class for the MmCondivisioneSocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmCondivisioneSocialPage = /** @class */ (function () {
    function MmCondivisioneSocialPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform, camera, instagramSocial, socialSharing, alertCtrl, market) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.camera = camera;
        this.instagramSocial = instagramSocial;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.market = market;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
        this.creaAlerts();
    }
    MmCondivisioneSocialPage.prototype.creaAlerts = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.alertTwitter = this.alertCtrl.create({
            title: "Vuoi anche scattare una foto e condividerla su Twitter?",
            buttons: [
                {
                    text: "VAI DIRETTAMENTE SU TWITTER",
                    handler: function () {
                        _this.alertAperti = false;
                        _this.creaAlerts();
                        _this.socialSharing.shareViaTwitter("")
                            .catch(function (err) {
                            alert(err);
                        });
                    }
                },
                {
                    text: "SCATTA FOTO",
                    handler: function () {
                        _this.alertAperti = false;
                        _this.creaAlerts();
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.socialSharing.shareViaTwitter("", base64Image)
                                .catch(function (err) {
                                alert(err);
                            });
                        });
                    }
                },
            ]
        });
        this.alertFacebook = this.alertCtrl.create({
            title: "Vuoi anche scattare una foto e condividerla su Facebook?",
            buttons: [
                {
                    text: "VAI DIRETTAMENTE SU FACEBOOK",
                    handler: function () {
                        _this.alertAperti = false;
                        _this.creaAlerts();
                        _this.socialSharing.shareViaFacebook("")
                            .catch(function (err) {
                            alert(err);
                        });
                    }
                },
                {
                    text: "SCATTA FOTO",
                    handler: function () {
                        _this.alertAperti = false;
                        _this.creaAlerts();
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.socialSharing.shareViaFacebook("", base64Image)
                                .catch(function (err) {
                                alert(err);
                            });
                        });
                    }
                },
            ]
        });
    };
    MmCondivisioneSocialPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmCondivisioneSocial');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        var divItem = document.createElement('div');
        divItem.className = 'contenuto';
        idCardContenuto.appendChild(divItem);
        //Instagram
        this.instagramSocial.isInstalled().then(function (response) {
            if (response) {
                divItem.appendChild(document.getElementById('bottone-instagram'));
                document.getElementById('bottone-installa-instagram').remove();
            }
            else {
                divItem.appendChild(document.getElementById('bottone-installa-instagram'));
                document.getElementById('bottone-instagram').remove();
            }
        }).then(function () {
            //Facebook
            var app = 'facebook';
            if (_this.platform.is('ios')) {
                app = 'com.apple.social.' + app;
            }
            _this.socialSharing.canShareVia(app).then(function () {
                divItem.appendChild(document.getElementById('bottone-facebook'));
                document.getElementById('bottone-installa-facebook').remove();
            }).catch(function () {
                divItem.appendChild(document.getElementById('bottone-installa-facebook'));
                document.getElementById('bottone-facebook').remove();
            }).then(function () {
                //Twitter
                var app = 'twitter';
                if (_this.platform.is('ios')) {
                    app = 'com.apple.social.' + app;
                }
                _this.socialSharing.canShareVia(app).then(function () {
                    divItem.appendChild(document.getElementById('bottone-twitter'));
                    document.getElementById('bottone-installa-twitter').remove();
                }).catch(function () {
                    divItem.appendChild(document.getElementById('bottone-installa-twitter'));
                    document.getElementById('bottone-twitter').remove();
                }).then(function () {
                    //Se sono su tablet o iPad non mostro whatsapp
                    if (_this.platform.is('tablet') || _this.platform.is('ipad')) {
                        document.getElementById('bottone-installa-whatsapp').remove();
                        document.getElementById('bottone-whatsapp').remove();
                    }
                    else {
                        //WHatsapp
                        var app_1 = 'whatsapp';
                        if (_this.platform.is('ios')) {
                            app_1 = 'com.apple.social.' + app_1;
                        }
                        _this.socialSharing.canShareVia(app_1).then(function () {
                            divItem.appendChild(document.getElementById('bottone-whatsapp'));
                            document.getElementById('bottone-installa-whatsapp').remove();
                        }).catch(function () {
                            divItem.appendChild(document.getElementById('bottone-installa-whatsapp'));
                            document.getElementById('bottone-whatsapp').remove();
                        });
                    }
                });
            });
        });
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmCondivisioneSocialPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmCondivisioneSocialPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            if (_this.alertAperti) {
                _this.alertFacebook.dismiss();
                _this.alertTwitter.dismiss();
                _this.alertAperti = false;
                _this.creaAlerts();
            }
            else {
                _this.stopRead();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
                _this.navCtrl.removeView(_this.navCtrl.last());
            }
        });
    };
    //Apre il side menu
    MmCondivisioneSocialPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "SocialService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmCondivisioneSocialPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("card-contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmCondivisioneSocialPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmCondivisioneSocialPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmCondivisioneSocialPage.prototype.instagram = function () {
        var _this = this;
        this.stopRead();
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.instagramSocial.share(base64Image);
        });
    };
    MmCondivisioneSocialPage.prototype.facebook = function () {
        var _this = this;
        this.stopRead();
        this.alertFacebook.present();
        this.alertFacebook.onDidDismiss(function () {
            _this.creaAlerts();
        });
        this.alertAperti = true;
    };
    MmCondivisioneSocialPage.prototype.twitter = function () {
        var _this = this;
        this.stopRead();
        this.alertTwitter.present();
        this.alertTwitter.onDidDismiss(function () {
            _this.creaAlerts();
        });
        this.alertAperti = true;
    };
    MmCondivisioneSocialPage.prototype.whatsapp = function () {
        var _this = this;
        this.stopRead();
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.socialSharing.shareViaWhatsApp("", base64Image)
                .catch(function (err) {
                alert(err);
            });
        });
    };
    MmCondivisioneSocialPage.prototype.installaWhatsapp = function () {
        this.stopRead();
        if (this.platform.is('ios')) {
            this.market.open('id310633997');
        }
        else {
            this.market.open('com.whatsapp');
        }
    };
    MmCondivisioneSocialPage.prototype.installaFacebook = function () {
        this.stopRead();
        if (this.platform.is('ios')) {
            this.market.open('id284882215');
        }
        else {
            this.market.open('com.facebook.katana');
        }
    };
    MmCondivisioneSocialPage.prototype.installaTwitter = function () {
        this.stopRead();
        if (this.platform.is('ios')) {
            this.market.open('id333903271');
        }
        else {
            this.market.open('com.twitter.android');
        }
    };
    MmCondivisioneSocialPage.prototype.installaInstagram = function () {
        this.stopRead();
        if (this.platform.is('ios')) {
            this.market.open('id389801252');
        }
        else {
            this.market.open('com.instagram.android');
        }
    };
    MmCondivisioneSocialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-condivisione-social',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-condivisione-social/mm-condivisione-social.html"*/'<ion-content id="paginaMmCondivisioneSocial" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto" class="container animated fadeInUp slow">\n      Seleziona l\'app che preferisci per condividere la tua esperienza al museo:\n      <br>\n      <br>\n      <div id="bottone-instagram">\n        <button class="social-class" id="instagram-button" ion-button (click)="instagram()">\n            <ion-icon name="logo-instagram"></ion-icon>\n            &nbsp;\n            Instagram\n        </button>\n        <br><br>\n      </div>\n      <div id="bottone-installa-instagram">\n        <button class="social-class" id="instagram-install-button" ion-button (click)="installaInstagram()">\n            <ion-icon name="logo-instagram"></ion-icon>\n            &nbsp;\n            Installa Instagram\n        </button>\n        <br><br>\n      </div>\n      <div id="bottone-facebook">\n        <button class="social-class" id="facebook-button" ion-button (click)="facebook()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            &nbsp;\n            Facebook\n        </button>\n        <br><br>\n      </div>\n      <div id="bottone-installa-facebook">\n        <button class="social-class" id="facebook-install-button" ion-button (click)="installaFacebook()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            &nbsp;\n            Installa Facebook\n        </button>\n        <br><br>\n      </div>\n      <div id="bottone-twitter">\n        <button class="social-class" id="twitter-button" ion-button (click)="twitter()">\n            <ion-icon name="logo-twitter"></ion-icon>\n            &nbsp;\n            Twitter\n        </button>\n        <br><br>\n      </div>\n      <div id="bottone-installa-twitter">\n        <button class="social-class" id="twitter-install-button" ion-button (click)="installaTwitter()">\n            <ion-icon name="logo-twitter"></ion-icon>\n            &nbsp;\n            Installa Twitter\n        </button>\n        <br><br>\n      </div>\n      <div id="bottone-whatsapp">\n        <button class="social-class" id="whatsapp-button" ion-button (click)="whatsapp()">\n            <ion-icon name="logo-whatsapp"></ion-icon>\n            &nbsp;\n            WhatsApp\n        </button>\n        <br><br>\n      </div>\n      <div id="bottone-installa-whatsapp">\n        <button class="social-class" id="whatsapp-button" ion-button (click)="installaWhatsapp()">\n            <ion-icon name="logo-whatsapp"></ion-icon>\n            &nbsp;\n            Installa WhatsApp\n        </button>\n        <br><br>\n      </div>\n      <div id="contenuto" class="content-content"></div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-condivisione-social/mm-condivisione-social.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_instagram__["a" /* Instagram */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__["a" /* Market */]])
    ], MmCondivisioneSocialPage);
    return MmCondivisioneSocialPage;
}());

//# sourceMappingURL=mm-condivisione-social.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmSaleEspositivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmSaleEspositivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmSaleEspositivePage = /** @class */ (function () {
    function MmSaleEspositivePage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmSaleEspositivePage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmSaleEspositive');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
        var array = [];
        array = Array.from(this.myContenuto);
        for (var i in array) {
            var divSala = document.createElement('div');
            divSala.className = "sala";
            idCardContenuto.appendChild(divSala);
            var titoloSala = document.createElement('h4');
            titoloSala.textContent = array[i].NUMERO + " - " + array[i].NOME;
            divSala.appendChild(titoloSala);
            var immagineSala = document.createElement('img');
            immagineSala.src = array[i].IMMAGINE;
            divSala.appendChild(immagineSala);
            immagineSala.insertAdjacentHTML('afterend', array[i].DESCRIZIONE);
        }
    };
    MmSaleEspositivePage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmSaleEspositivePage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmSaleEspositivePage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "SaleEspositiveService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmSaleEspositivePage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmSaleEspositivePage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmSaleEspositivePage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmSaleEspositivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-sale-espositive',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-sale-espositive/mm-sale-espositive.html"*/'<ion-content id="paginaMmSaleEspositive" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-sale-espositive/mm-sale-espositive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmSaleEspositivePage);
    return MmSaleEspositivePage;
}());

//# sourceMappingURL=mm-sale-espositive.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmPercorsiATemaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmPercorsiATemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmPercorsiATemaPage = /** @class */ (function () {
    function MmPercorsiATemaPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmPercorsiATemaPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmPercorsiATema');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
        // ciclo 10 percorsi all'intenro dei quali ciclo un massimo di 5 step, questo per andare a eliminare gli elementi della struttura base della pagina
        var nPercorso = 0;
        var arrayContenuto = [];
        arrayContenuto = Array.from(this.myContenuto);
        while (nPercorso <= 9) {
            var nSteps = 0;
            var idCard = document.getElementById('slideCard-' + nPercorso);
            //idCard.className = 'cardSlide'
            if (arrayContenuto[nPercorso] != undefined) {
                var idSlidePercorso = document.getElementById('slide-' + nPercorso + nSteps);
                var contentSlide = document.createElement('div');
                contentSlide.className = 'contentSlide';
                idSlidePercorso.appendChild(contentSlide);
                var titoloPercorso = document.createElement('h4');
                console.log(arrayContenuto[nPercorso]);
                console.log(nPercorso);
                titoloPercorso.textContent = arrayContenuto[nPercorso].TITOLO;
                contentSlide.appendChild(titoloPercorso);
                var sottoTitoloPercorso = document.createElement('h3');
                sottoTitoloPercorso.textContent = arrayContenuto[nPercorso].SOTTOTITOLO;
                contentSlide.appendChild(sottoTitoloPercorso);
                var immaginePercorso = document.createElement('img');
                immaginePercorso.src = arrayContenuto[nPercorso].IMMAGINE;
                contentSlide.appendChild(immaginePercorso);
                immaginePercorso.insertAdjacentHTML('afterend', arrayContenuto[nPercorso].DESCRIZIONE);
                var descrizionePercorsoArray = contentSlide.getElementsByTagName('P');
                var descrizionePercorso = void 0;
                descrizionePercorso = descrizionePercorsoArray[0];
                console.log(descrizionePercorso, descrizionePercorso.offsetHeight);
                //popolo le slide degli step di ogni percorso
                while (nSteps <= 3) {
                    var idSlideStep = document.getElementById('slide-' + nPercorso + (nSteps + 1));
                    console.log(document.getElementById('slide-' + nPercorso + (nSteps + 1)));
                    if (arrayContenuto[nPercorso].STEPS[nSteps] != undefined) {
                        var contentStep = document.createElement('div');
                        contentStep.className = 'contentSlide';
                        idSlideStep.appendChild(contentStep);
                        var titoloStep = document.createElement('h4');
                        titoloStep.textContent = arrayContenuto[nPercorso].STEPS[nSteps].TITOLO;
                        contentStep.appendChild(titoloStep);
                        var immagineStep = document.createElement('img');
                        immagineStep.src = arrayContenuto[nPercorso].STEPS[nSteps].IMMAGINE;
                        contentStep.appendChild(immagineStep);
                        immagineStep.insertAdjacentHTML('afterend', arrayContenuto[nPercorso].STEPS[nSteps].DESCRIZIONE);
                    }
                    else {
                        idSlideStep.remove();
                    }
                    nSteps = nSteps + 1;
                }
            }
            else {
                idCard.remove();
            }
            nPercorso = nPercorso + 1;
        }
        // for (let i in this.myContenuto){
        //   let divSala = document.createElement('div')
        //   divSala.className = "sala"
        //   idCardContenuto.appendChild(divSala)
        //   let titoloSala = document.createElement('h4')
        //   titoloSala.textContent = this.myContenuto[i].NUMERO + " - " + this.myContenuto[i].NOME
        //   divSala.appendChild(titoloSala)
        //   let immagineSala = document.createElement('img')
        //   immagineSala.src = this.myContenuto[i].IMMAGINE
        //   divSala.appendChild(immagineSala)
        //   immagineSala.insertAdjacentHTML('afterend', this.myContenuto[i].DESCRIZIONE)
        // }
    };
    MmPercorsiATemaPage.prototype.ionViewDidEnter = function () {
        var contenuto = document.getElementById('contenuto');
        var cardSlidesArray = contenuto.getElementsByTagName('ion-card');
        for (var i = 0; i < cardSlidesArray.length; i++) {
            var cardSlide = void 0;
            cardSlide = cardSlidesArray[i];
            console.log(cardSlidesArray);
            console.log(cardSlide);
            var slidearray = cardSlide.getElementsByTagName('ion-slide');
            var slide = void 0;
            slide = slidearray[0];
            var h4Array = slide.getElementsByTagName('h4');
            var h4 = void 0;
            h4 = h4Array[0];
            var h3Array = void 0;
            var h3 = void 0;
            var h3OffsetHeight = void 0;
            h3Array = slide.getElementsByTagName('h3');
            h3 = h3Array[0];
            h3OffsetHeight = h3.offsetHeight + 4;
            var pArray = slide.getElementsByTagName('p');
            var p = void 0;
            p = pArray[0];
            var imgArray = slide.getElementsByTagName('img');
            var img = void 0;
            img = imgArray[0];
            // let imgSlideArray = idSlideCard.getElementsByTagName('IMG');
            // let imgSlide =
            //idSlideCard.style.height = 'auto';
            cardSlide.style.height = h4.offsetHeight + 14 + h3OffsetHeight + (p.offsetHeight > img.offsetHeight ? p.offsetHeight : img.offsetHeight) + 22 + 'px';
        }
    };
    MmPercorsiATemaPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmPercorsiATemaPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmPercorsiATemaPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "PercorsiATemaService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmPercorsiATemaPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmPercorsiATemaPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmPercorsiATemaPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    //calcolo l'altezza della card in base alla lunghezza del contenuto
    MmPercorsiATemaPage.prototype.slideChanged = function (indexSlider, SlideCard) {
        var cardSliderArray = this.slides.toArray();
        var cardSlider = cardSliderArray[indexSlider];
        // console.log(indexSlider,SlideCard);
        // console.log("Slide numero:",cardSliderArray[indexSlider]);
        // console.log(this.slides);
        var idSlideCard = document.getElementById(SlideCard);
        //let currentIndex = this.slides[indexSlider].getActiveIndex();
        var currentIndex = cardSlider.getActiveIndex();
        // console.log(cardSlider._slides.length);
        // console.log(cardSlider.length);
        // console.log('Current index is', currentIndex);
        if (currentIndex != cardSlider._slides.length) {
            var h4Array = idSlideCard.getElementsByTagName('h4');
            var h4 = void 0;
            h4 = h4Array[currentIndex];
            var h3Array = void 0;
            var h3 = void 0;
            var h3OffsetHeight = void 0;
            if (currentIndex == 0) {
                h3Array = idSlideCard.getElementsByTagName('h3');
                h3 = h3Array[currentIndex];
                h3OffsetHeight = h3.offsetHeight + 4;
            }
            else {
                h3OffsetHeight = 0;
            }
            var pArray = idSlideCard.getElementsByTagName('p');
            var p = void 0;
            p = pArray[currentIndex];
            var imgArray = idSlideCard.getElementsByTagName('img');
            var img = void 0;
            img = imgArray[currentIndex];
            // let imgSlideArray = idSlideCard.getElementsByTagName('IMG');
            // let imgSlide =
            //idSlideCard.style.height = 'auto';
            idSlideCard.style.height = h4.offsetHeight + 14 + h3OffsetHeight + (p.offsetHeight > img.offsetHeight ? p.offsetHeight : img.offsetHeight) + 22 + 'px';
            // console.log(idSlideCard.style.height);
        }
    };
    MmPercorsiATemaPage.prototype.adjustSlideHeight = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], MmPercorsiATemaPage.prototype, "slides", void 0);
    MmPercorsiATemaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-percorsi-a-tema',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-percorsi-a-tema/mm-percorsi-a-tema.html"*/'<ion-content id="paginaMmPercorsiATema" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n        <ion-card id=\'slideCard-0\' >\n          <ion-slides pager (ionSlideDidChange)="slideChanged(0,\'slideCard-0\')">\n            <ion-slide id=\'slide-00\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-01\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-02\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-03\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-04\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-1\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(1,\'slideCard-1\')">\n            <ion-slide id=\'slide-10\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-11\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-12\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-13\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-14\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-2\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(2,\'slideCard-2\')">\n            <ion-slide id=\'slide-20\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-21\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-22\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-23\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-24\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-3\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(3,\'slideCard-3\')">\n            <ion-slide id=\'slide-30\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-31\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-32\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-33\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-34\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-4\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(4,\'slideCard-4\')">\n            <ion-slide id=\'slide-40\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-41\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-42\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-43\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-44\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-5\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(5,\'slideCard-5\')">\n            <ion-slide id=\'slide-50\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-51\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-52\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-53\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-54\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-6\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(6,\'slideCard-6\')">\n            <ion-slide id=\'slide-60\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-61\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-62\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-63\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-64\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-7\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(7,\'slideCard-7\')">\n            <ion-slide id=\'slide-70\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-71\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-72\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-73\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-74\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-8\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(8,\'slideCard-8\')">\n            <ion-slide id=\'slide-80\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-81\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-82\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-83\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-84\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-card id=\'slideCard-9\'>\n          <ion-slides pager (ionSlideDidChange)="slideChanged(9,\'slideCard-9\')">\n            <ion-slide id=\'slide-90\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-91\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-92\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-93\'>\n\n            </ion-slide>\n            <ion-slide id=\'slide-94\'>\n\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-percorsi-a-tema/mm-percorsi-a-tema.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmPercorsiATemaPage);
    return MmPercorsiATemaPage;
}());

//# sourceMappingURL=mm-percorsi-a-tema.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmMostrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
 * Generated class for the MmMostrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MmMostrePage = /** @class */ (function () {
    function MmMostrePage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
        this.myMuseoClass = this.navParams.get('museoClass');
        this.myContentClass = this.navParams.get('contenutoClass');
        this.myMuseo = this.navParams.get('datiMuseo');
    }
    MmMostrePage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        var idClass = document.getElementById('paginaMmMostre');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MmMostrePage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmMostrePage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.stopRead();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmMostrePage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "MostreService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
    };
    MmMostrePage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MmMostrePage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MmMostrePage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmMostrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-mostre',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-mostre/mm-mostre.html"*/'<ion-content id="paginaMmMostre" class="card-background-page">\n	<ion-card id="content-header" class="headerContent">\n		<button class="sideMenu" ion-button (click)="openMenu()">\n			<ion-icon name="menu" id="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic" id="vocal"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off" id="vocal-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-mostre/mm-mostre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmMostrePage);
    return MmMostrePage;
}());

//# sourceMappingURL=mm-mostre.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
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
 * Generated class for the MostrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MostrePage = /** @class */ (function () {
    function MostrePage(navCtrl, navParams, tts, menuCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.myContenuto = this.navParams.get('mostre');
    }
    MostrePage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaMostre');
        document.getElementById('content_cardTitle').innerText = "MOSTRE";
        document.getElementById('content_cardSubTitle').innerText = "ISTITUZIONE BOLOGNA MUSEI";
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MostrePage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MostrePage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.goHomePage();
        });
    };
    MostrePage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MostrePage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MostrePage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MostrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mostre',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mostre/mostre.html"*/'<ion-content id="paginaMostre" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mostre/mostre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MostrePage);
    return MostrePage;
}());

//# sourceMappingURL=mostre.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MpContattiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
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
 * Generated class for the MpContattiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MpContattiPage = /** @class */ (function () {
    function MpContattiPage(navCtrl, navParams, tts, menuCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
    }
    MpContattiPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaMpContatti');
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = "ISTITUZIONE BOLOGNA MUSEI";
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MpContattiPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MpContattiPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.goHomePage();
        });
    };
    MpContattiPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MpContattiPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MpContattiPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MpContattiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mp-contatti',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mp-contatti/mp-contatti.html"*/'<ion-content id="paginaMpContatti" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mp-contatti/mp-contatti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MpContattiPage);
    return MpContattiPage;
}());

//# sourceMappingURL=mp-contatti.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__musei_musei__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(15);
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
    function MuseoPage(menuCtrl, navCtrl, navParams, tts, nativePageTransitions, platform) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.museo = this.navParams.get('musei');
        this.classeMuseo = this.navParams.get('classe1');
        this.museiTotali = this.navParams.get('museiTotali');
        this.classeAreaTotale = this.navParams.get('classeAreaTotale');
    }
    MuseoPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaMuseo');
        idClass.classList.add(this.classeMuseo);
        var idCardDescrizione = document.getElementById('descrizione');
        idCardDescrizione.innerHTML = this.museo[0].DESCRIZIONE;
        //calcolo altezza contenitore descrizione museo
        var idCardTitle = document.getElementById('museo_cardTitle');
        idCardDescrizione.style.height = idCardTitle.offsetHeight - idCardDescrizione.offsetTop + "px";
        //Disabilito il menu principale e abilito quello specifico del museo
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MuseoPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MuseoPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            if (_this.museiTotali != undefined && _this.classeAreaTotale != undefined) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__musei_musei__["a" /* MuseiPage */], { musei: _this.museiTotali, classe1: _this.classeAreaTotale });
                _this.navCtrl.removeView(_this.navCtrl.last());
            }
            else {
                _this.goHomePage();
            }
        });
    };
    //Apre il side menu
    MuseoPage.prototype.openMenu = function () {
        this.stopRead();
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { datiMuseo: this.museo, museoClass: this.classeMuseo, ultimo: "MuseoService" }, { animate: true, direction: "back" });
        this.navCtrl.removeView(this.navCtrl.last());
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
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        //Riabilito il menu principale e disabilito quello specifico del museo
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MuseoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-museo',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/'<ion-content id="paginaMuseo" class="card-background-page">\n	<ion-card class="cardHome" style="background-color: yellow">\n		<button class="sideMenu animated fadeInDown" ion-button (click)="openMenu()">\n			<ion-icon name="menu" id="menu"></ion-icon>\n		</button>\n		<button class="vocal-button animated fadeInDown" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic" id="vocal"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off" id="vocal-off"></ion-icon>\n		</button>\n		<button class="home-button animated fadeInDown" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home" id="home-icon"></ion-icon>\n		</button>\n    	<div class="card-title animated fadeIn" id="museo_cardTitle">{{museo[0].NOME}}\n			<div class="museo-content animated fadeInUp" id="descrizione">\n				</div>\n			</div>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MuseoPage);
    return MuseoPage;
}());

//# sourceMappingURL=museo.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MpInformazioniGeneraliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
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
 * Generated class for the MpInformazioniGeneraliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MpInformazioniGeneraliPage = /** @class */ (function () {
    function MpInformazioniGeneraliPage(navCtrl, navParams, tts, menuCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
    }
    MpInformazioniGeneraliPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaMpInformazioniGenerali');
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = "ISTITUZIONE BOLOGNA MUSEI";
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MpInformazioniGeneraliPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MpInformazioniGeneraliPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.goHomePage();
        });
    };
    MpInformazioniGeneraliPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MpInformazioniGeneraliPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MpInformazioniGeneraliPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MpInformazioniGeneraliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mp-informazioni-generali',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mp-informazioni-generali/mp-informazioni-generali.html"*/'<ion-content id="paginaMpInformazioniGenerali" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mp-informazioni-generali/mp-informazioni-generali.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MpInformazioniGeneraliPage);
    return MpInformazioniGeneraliPage;
}());

//# sourceMappingURL=mp-informazioni-generali.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MpLeAreeMusealiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(8);
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
 * Generated class for the MpLeAreeMusealiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MpLeAreeMusealiPage = /** @class */ (function () {
    function MpLeAreeMusealiPage(navCtrl, navParams, tts, menuCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.myVoceMenu = this.navParams.get('voceMenu');
        this.myContenuto = this.navParams.get('contenuto');
    }
    MpLeAreeMusealiPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaMpAreeMuseali');
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = "ISTITUZIONE BOLOGNA MUSEI";
        var idCardContenuto = document.getElementById('contenuto');
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
    };
    MpLeAreeMusealiPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MpLeAreeMusealiPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.goHomePage();
        });
    };
    MpLeAreeMusealiPage.prototype.read = function () {
        this.tts.speak({ text: document.getElementById("contenuto").innerText, locale: 'it-IT', rate: 0.88 });
        document.getElementById("mic").style.display = "none";
        document.getElementById("disabled-mic").style.display = "inline";
    };
    MpLeAreeMusealiPage.prototype.stopRead = function () {
        this.tts.speak("");
        document.getElementById("mic").style.display = "inline";
        document.getElementById("disabled-mic").style.display = "none";
    };
    //Associato al tasto per tornare all'home page
    MpLeAreeMusealiPage.prototype.goHomePage = function () {
        this.stopRead();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MpLeAreeMusealiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mp-le-aree-museali',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mp-le-aree-museali/mp-le-aree-museali.html"*/'<ion-content id="paginaMpAreeMuseali" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic" id="vocal"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off" id="vocal-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home" id="home-icon"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title animated fadeInLeft slow" id="content_cardTitle"></div>\n      <div class="card-subtitle animated fadeInRight slow" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content animated fadeInUp slow">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mp-le-aree-museali/mp-le-aree-museali.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MpLeAreeMusealiPage);
    return MpLeAreeMusealiPage;
}());

//# sourceMappingURL=mp-le-aree-museali.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventi_calendario_eventi_calendario__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(85);
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
 * Generated class for the TestCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestCalendarPage = /** @class */ (function () {
    function TestCalendarPage(navCtrl, navParams, menuCtrl, platform, alertCtrl, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
    }
    TestCalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestCalendarPage');
    };
    TestCalendarPage.prototype.ionViewWillEnter = function () {
        this.date = new Date();
        this.monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
        this.getDaysOfMonth();
        this.loadEventThisMonth();
    };
    TestCalendarPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    TestCalendarPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    TestCalendarPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    TestCalendarPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    TestCalendarPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.goHomePage();
        });
    };
    //Associato al tasto per tornare all'home page
    TestCalendarPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    TestCalendarPage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__eventi_calendario_eventi_calendario__["a" /* EventiCalendarioPage */]);
    };
    TestCalendarPage.prototype.loadEventThisMonth = function () {
        var _this = this;
        this.eventList = new Array();
        console.log(this.eventList);
        var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        this.calendar.listEventsInRange(startDate, endDate).then(function (msg) {
            msg.forEach(function (item) {
                _this.eventList.push(item);
                console.log(msg);
                console.log(item);
            });
        }, function (err) {
            console.log(err);
        });
    };
    TestCalendarPage.prototype.checkEvent = function (day) {
        //console.log(day);
        var hasEvent = false;
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
        //console.log(this.eventList);
        this.eventList.forEach(function (event) {
            if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
                hasEvent = true;
            }
        });
        return hasEvent;
    };
    TestCalendarPage.prototype.selectDate = function (day) {
        var _this = this;
        this.isSelected = false;
        this.selectedEvent = new Array();
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
        console.log(this.eventList);
        this.eventList.forEach(function (event) {
            if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
                _this.isSelected = true;
                _this.selectedEvent.push(event);
            }
        });
    };
    TestCalendarPage.prototype.deleteEvent = function (evt) {
        var _this = this;
        // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
        // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure want to delete this event?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(function (msg) {
                            console.log(msg);
                            _this.loadEventThisMonth();
                            _this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    TestCalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-calendar',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/test-calendar/test-calendar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Calendar App\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content padding>\n    <div class="calendar-header">\n      <ion-row class="calendar-month">\n        <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n        <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n        <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n      </ion-row>\n    </div>\n    <div class="calendar-body">\n      <ion-grid>\n        <ion-row class="calendar-weekday">\n          <ion-col>Su</ion-col>\n          <ion-col>Mo</ion-col>\n          <ion-col>Tu</ion-col>\n          <ion-col>We</ion-col>\n          <ion-col>Th</ion-col>\n          <ion-col>Fr</ion-col>\n          <ion-col>Sa</ion-col>\n        </ion-row>\n        <ion-row class="calendar-date">\n          <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" (click)="goToLastMonth()">{{lastDay}}</ion-col>\n          <ion-col col-1 *ngFor="let day of daysInThisMonth" (click)="selectDate(day)">\n            <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n            <ng-template #otherDate class="otherDate">\n              {{day}}<br>\n              <div class="event-bullet" *ngIf="checkEvent(day)"></div>\n            </ng-template>\n          </ion-col>\n          <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="goToNextMonth()">{{nextDay}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="selected-event" *ngIf="isSelected">\n      <ion-list>\n        <ion-item *ngFor="let se of selectedEvent">\n          <ion-buttons end>\n            <button ion-button clear icon-only (click)="deleteEvent(se)">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-buttons>\n          <h2>{{se.title}}</h2>\n          <h3>{{se.message}}</h3>\n          <p>Start Date: {{se.startDate}}<br>\n          Start Date: {{se.endDate}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/test-calendar/test-calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */]])
    ], TestCalendarPage);
    return TestCalendarPage;
}());

//# sourceMappingURL=test-calendar.js.map

/***/ }),

/***/ 142:
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
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mm_informazioni_mm_informazioni__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mm_orari_mm_orari__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mm_biglietti_mm_biglietti__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mm_il_palazzo_mm_il_palazzo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mm_le_collezioni_mm_le_collezioni__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mm_la_biblioteca_mm_la_biblioteca__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mm_come_raggiungerci_mm_come_raggiungerci__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mm_eventi_mm_eventi__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mm_contatti_mm_contatti__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_instagram__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mm_condivisione_social_mm_condivisione_social__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mm_sale_espositive_mm_sale_espositive__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mm_percorsi_a_tema_mm_percorsi_a_tema__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mm_mostre_mm_mostre__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MenuPage = /** @class */ (function () {
    function MenuPage(socialSharing, navCtrl, navParams, nativePageTransitions, platform, instagram, tts) {
        this.socialSharing = socialSharing;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.instagram = instagram;
        this.tts = tts;
        this.museo = this.navParams.get('datiMuseo');
        this.classe = this.navParams.get('museoClass');
        this.ultimo = this.navParams.get('ultimo');
    }
    MenuPage.prototype.return = function () {
        this.onLoad(this.ultimo, false);
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        this.initializeBackButton();
    };
    MenuPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MenuPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.tts.speak("");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__museo_museo__["a" /* MuseoPage */], { musei: _this.museo, classe1: _this.classe });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    MenuPage.prototype.onLoad = function (service, animation) {
        var options = {
            direction: 'left',
            duration: 600
        };
        this.tts.speak("");
        switch (service) {
            case "MuseoService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__museo_museo__["a" /* MuseoPage */], { musei: this.museo, classe1: this.classe });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "PalazzoService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mm_il_palazzo_mm_il_palazzo__["a" /* MmIlPalazzoPage */], { datiMuseo: this.museo, voceMenu: 'PALAZZO', contenuto: this.museo[0].IL_PALAZZO, museoClass: this.classe, contentClass: 'content_il_palazzo' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "CollezioniService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mm_le_collezioni_mm_le_collezioni__["a" /* MmLeCollezioniPage */], { datiMuseo: this.museo, voceMenu: 'COLLEZIONI', contenuto: this.museo[0].LE_COLLEZIONI, museoClass: this.classe, contentClass: 'content_le_collezioni' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "BibliotecaService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__mm_la_biblioteca_mm_la_biblioteca__["a" /* MmLaBibliotecaPage */], { datiMuseo: this.museo, voceMenu: 'BIBLIOTECA', contenuto: this.museo[0].LA_BIBLIOTECA, museoClass: this.classe, contentClass: 'content_la_biblioteca' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "SaleEspositiveService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__mm_sale_espositive_mm_sale_espositive__["a" /* MmSaleEspositivePage */], { datiMuseo: this.museo, voceMenu: 'SALE ESPOSITIVE', contenuto: this.museo[0].SALE_ESPOSITIVE, museoClass: this.classe, contentClass: 'content_sale_espositive' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "PercorsiATemaService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__mm_percorsi_a_tema_mm_percorsi_a_tema__["a" /* MmPercorsiATemaPage */], { datiMuseo: this.museo, voceMenu: 'PERCORSI A TEMA', contenuto: this.museo[0].PERCORSI_A_TEMA, museoClass: this.classe, contentClass: 'content_percorsi_a_tema' });
                break;
            case "InformazioniService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mm_informazioni_mm_informazioni__["a" /* MmInformazioniPage */], { datiMuseo: this.museo, voceMenu: 'INFORMAZIONI', contenuto: this.museo[0].INFO, museoClass: this.classe, contentClass: 'content_informazioni' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "IndicazioniService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__mm_come_raggiungerci_mm_come_raggiungerci__["a" /* MmComeRaggiungerciPage */], { datiMuseo: this.museo, voceMenu: 'COME RAGGIUNGERCI', contenuto: this.museo[0].COME_RAGGIUNGERCI, museoClass: this.classe, contentClass: 'content_come_raggiungerci' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "OrariService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mm_orari_mm_orari__["a" /* MmOrariPage */], { datiMuseo: this.museo, voceMenu: 'ORARI', contenuto: this.museo[0].ORARI, museoClass: this.classe, contentClass: 'content_orari' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "BigliettiService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mm_biglietti_mm_biglietti__["a" /* MmBigliettiPage */], { datiMuseo: this.museo, voceMenu: 'BIGLIETTI', contenuto: this.museo[0].BIGLIETTI, museoClass: this.classe, contentClass: 'content_biglietti' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "EventiService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__mm_eventi_mm_eventi__["a" /* MmEventiPage */], { datiMuseo: this.museo, voceMenu: 'EVENTI', contenuto: this.museo[0].EVENTI, museoClass: this.classe, contentClass: 'content_eventi' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "MostreService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__mm_mostre_mm_mostre__["a" /* MmMostrePage */], { datiMuseo: this.museo, voceMenu: 'MOSTRE', contenuto: this.museo[0].MOSTRE, museoClass: this.classe, contentClass: 'content_mostre' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "SocialService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__mm_condivisione_social_mm_condivisione_social__["a" /* MmCondivisioneSocialPage */], { datiMuseo: this.museo, voceMenu: 'CONDIVISIONE SOCIAL', museoClass: this.classe, contentClass: 'content_condivisione_social' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "ContattiService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__mm_contatti_mm_contatti__["a" /* MmContattiPage */], { datiMuseo: this.museo, voceMenu: 'CONTATTI', contenuto: this.museo[0].CONTATTI, museoClass: this.classe, contentClass: 'content_contatti' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            default:
                break;
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/menu/menu.html"*/'<ion-header class="size-button">\n<ion-toolbar class="size-button">\n    <ion-title class="size-button">MENU</ion-title>\n    <ion-buttons end>\n        <button class="size-button" ion-button icon-only (click)="return()">\n            <ion-icon class="size-button" name="arrow-forward" class="toolbar-title"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <button class="size-button" ion-item (click)="onLoad(\'LoginService\', \'true\')">\n            <ion-icon name="contact" item-left></ion-icon>\n            Login\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'MuseoService\', \'true\')">\n            <ion-icon name="archive" item-left></ion-icon>\n            Museo\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'PalazzoService\', \'true\')">\n            <ion-icon name="construct" item-left></ion-icon>\n            Palazzo\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'CollezioniService\', \'true\')">\n            <ion-icon name="images" item-left></ion-icon>\n            Collezioni\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'BibliotecaService\', \'true\')">\n            <ion-icon name="book" item-left></ion-icon>\n            Biblioteca\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'SaleEspositiveService\', \'true\')">\n          <ion-icon name="clipboard" item-left></ion-icon>\n            Sale Espositive\n      </button>\n      <button class="size-button" ion-item (click)="onLoad(\'PercorsiATemaService\', \'true\')">\n            <ion-icon name="git-compare" item-left></ion-icon>\n            Percorsi A Tema\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'InformazioniService\', \'true\')">\n            <ion-icon name="information-circle" item-left></ion-icon>\n            Informazioni\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'IndicazioniService\', \'true\')">\n            <ion-icon name="pin" item-left></ion-icon>\n            Come raggiungerci\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'OrariService\', \'true\')">\n            <ion-icon name="alarm" item-left></ion-icon>\n            Orari\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'BigliettiService\', \'true\')">\n            <ion-icon name="paper" item-left></ion-icon>\n            Biglietti\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'EventiService\', \'true\')">\n            <ion-icon name="paper-plane" item-left></ion-icon>\n            Eventi\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'MostreService\', \'true\')">\n            <ion-icon name="paper-plane" item-left></ion-icon>\n            Mostre\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'SocialService\', \'true\')">\n            <ion-icon name="logo-facebook" item-left></ion-icon>\n            Condivisione Social\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(PercorsiService, \'true\')">\n            <ion-icon name="git-compare" item-left></ion-icon>\n            Percorsi Trasversali\n        </button>\n        <button class="size-button" ion-item (click)="onLoad(\'ContattiService\', \'true\')">\n          <ion-icon name="contacts" item-left></ion-icon>\n            Contatti\n       </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_instagram__["a" /* Instagram */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/eventi-calendario/eventi-calendario.module": [
		305,
		22
	],
	"../pages/eventi/eventi.module": [
		306,
		21
	],
	"../pages/menu/menu.module": [
		307,
		20
	],
	"../pages/mm-biglietti/mm-biglietti.module": [
		308,
		19
	],
	"../pages/mm-come-raggiungerci/mm-come-raggiungerci.module": [
		309,
		18
	],
	"../pages/mm-condivisione-social/mm-condivisione-social.module": [
		310,
		17
	],
	"../pages/mm-contatti/mm-contatti.module": [
		311,
		16
	],
	"../pages/mm-eventi/mm-eventi.module": [
		312,
		15
	],
	"../pages/mm-il-palazzo/mm-il-palazzo.module": [
		313,
		14
	],
	"../pages/mm-informazioni/mm-informazioni.module": [
		314,
		13
	],
	"../pages/mm-la-biblioteca/mm-la-biblioteca.module": [
		315,
		12
	],
	"../pages/mm-le-collezioni/mm-le-collezioni.module": [
		316,
		11
	],
	"../pages/mm-mostre/mm-mostre.module": [
		317,
		10
	],
	"../pages/mm-orari/mm-orari.module": [
		318,
		9
	],
	"../pages/mm-percorsi-a-tema/mm-percorsi-a-tema.module": [
		319,
		8
	],
	"../pages/mm-sale-espositive/mm-sale-espositive.module": [
		320,
		7
	],
	"../pages/mostre/mostre.module": [
		321,
		6
	],
	"../pages/mp-contatti/mp-contatti.module": [
		322,
		5
	],
	"../pages/mp-informazioni-generali/mp-informazioni-generali.module": [
		323,
		4
	],
	"../pages/mp-le-aree-museali/mp-le-aree-museali.module": [
		326,
		3
	],
	"../pages/musei/musei.module": [
		324,
		2
	],
	"../pages/museo/museo.module": [
		325,
		1
	],
	"../pages/test-calendar/test-calendar.module": [
		327,
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
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(112);
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

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_musei_musei__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mm_informazioni_mm_informazioni__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mm_orari_mm_orari__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_mm_biglietti_mm_biglietti__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mm_il_palazzo_mm_il_palazzo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mm_le_collezioni_mm_le_collezioni__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_mm_la_biblioteca_mm_la_biblioteca__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_mm_come_raggiungerci_mm_come_raggiungerci__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_mm_eventi_mm_eventi__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_mm_condivisione_social_mm_condivisione_social__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_menu_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_launch_navigator__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_mm_contatti_mm_contatti__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_instagram__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_market__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_mm_sale_espositive_mm_sale_espositive__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_mp_informazioni_generali_mp_informazioni_generali__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_mp_le_aree_museali_mp_le_aree_museali__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_mp_contatti_mp_contatti__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_mm_percorsi_a_tema_mm_percorsi_a_tema__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_mm_mostre_mm_mostre__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_test_calendar_test_calendar__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_calendar__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_eventi_calendario_eventi_calendario__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_mostre_mostre__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_eventi_eventi__ = __webpack_require__(114);
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
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_12__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_museo_museo__["a" /* MuseoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mm_informazioni_mm_informazioni__["a" /* MmInformazioniPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mm_orari_mm_orari__["a" /* MmOrariPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_mm_biglietti_mm_biglietti__["a" /* MmBigliettiPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mm_il_palazzo_mm_il_palazzo__["a" /* MmIlPalazzoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mm_le_collezioni_mm_le_collezioni__["a" /* MmLeCollezioniPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mm_la_biblioteca_mm_la_biblioteca__["a" /* MmLaBibliotecaPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mm_come_raggiungerci_mm_come_raggiungerci__["a" /* MmComeRaggiungerciPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mm_eventi_mm_eventi__["a" /* MmEventiPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mm_contatti_mm_contatti__["a" /* MmContattiPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_mm_condivisione_social_mm_condivisione_social__["a" /* MmCondivisioneSocialPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_mm_sale_espositive_mm_sale_espositive__["a" /* MmSaleEspositivePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_mp_informazioni_generali_mp_informazioni_generali__["a" /* MpInformazioniGeneraliPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_mp_contatti_mp_contatti__["a" /* MpContattiPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_mp_le_aree_museali_mp_le_aree_museali__["a" /* MpLeAreeMusealiPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_mm_percorsi_a_tema_mm_percorsi_a_tema__["a" /* MmPercorsiATemaPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_mm_mostre_mm_mostre__["a" /* MmMostrePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_test_calendar_test_calendar__["a" /* TestCalendarPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_eventi_calendario_eventi_calendario__["a" /* EventiCalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_mostre_mostre__["a" /* MostrePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_eventi_eventi__["a" /* EventiPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                    navExitApp: false
                }, {
                    links: [
                        { loadChildren: '../pages/eventi-calendario/eventi-calendario.module#EventiCalendarioPageModule', name: 'EventiCalendarioPage', segment: 'eventi-calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventi/eventi.module#EventiPageModule', name: 'EventiPage', segment: 'eventi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-biglietti/mm-biglietti.module#MmBigliettiPageModule', name: 'MmBigliettiPage', segment: 'mm-biglietti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-come-raggiungerci/mm-come-raggiungerci.module#MmComeRaggiungerciPageModule', name: 'MmComeRaggiungerciPage', segment: 'mm-come-raggiungerci', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-condivisione-social/mm-condivisione-social.module#MmCondivisioneSocialPageModule', name: 'MmCondivisioneSocialPage', segment: 'mm-condivisione-social', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-contatti/mm-contatti.module#MmContattiPageModule', name: 'MmContattiPage', segment: 'mm-contatti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-eventi/mm-eventi.module#MmEventiPageModule', name: 'MmEventiPage', segment: 'mm-eventi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-il-palazzo/mm-il-palazzo.module#MmIlPalazzoPageModule', name: 'MmIlPalazzoPage', segment: 'mm-il-palazzo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-informazioni/mm-informazioni.module#MmInformazioniPageModule', name: 'MmInformazioniPage', segment: 'mm-informazioni', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-la-biblioteca/mm-la-biblioteca.module#MmLaBibliotecaPageModule', name: 'MmLaBibliotecaPage', segment: 'mm-la-biblioteca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-le-collezioni/mm-le-collezioni.module#MmLeCollezioniPageModule', name: 'MmLeCollezioniPage', segment: 'mm-le-collezioni', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-mostre/mm-mostre.module#MmMostrePageModule', name: 'MmMostrePage', segment: 'mm-mostre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-orari/mm-orari.module#MmOrariPageModule', name: 'MmOrariPage', segment: 'mm-orari', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-percorsi-a-tema/mm-percorsi-a-tema.module#MmPercorsiATemaPageModule', name: 'MmPercorsiATemaPage', segment: 'mm-percorsi-a-tema', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-sale-espositive/mm-sale-espositive.module#MmSaleEspositivePageModule', name: 'MmSaleEspositivePage', segment: 'mm-sale-espositive', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mostre/mostre.module#MostrePageModule', name: 'MostrePage', segment: 'mostre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mp-contatti/mp-contatti.module#MpContattiPageModule', name: 'MpContattiPage', segment: 'mp-contatti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mp-informazioni-generali/mp-informazioni-generali.module#MpInformazioniGeneraliPageModule', name: 'MpInformazioniGeneraliPage', segment: 'mp-informazioni-generali', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/musei/musei.module#MuseiPageModule', name: 'MuseiPage', segment: 'musei', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/museo/museo.module#MuseoPageModule', name: 'MuseoPage', segment: 'museo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mp-le-aree-museali/mp-le-aree-museali.module#MpLeAreeMusealiPageModule', name: 'MpLeAreeMusealiPage', segment: 'mp-le-aree-museali', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-calendar/test-calendar.module#TestCalendarPageModule', name: 'TestCalendarPage', segment: 'test-calendar', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_12__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_museo_museo__["a" /* MuseoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mm_informazioni_mm_informazioni__["a" /* MmInformazioniPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mm_orari_mm_orari__["a" /* MmOrariPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_mm_biglietti_mm_biglietti__["a" /* MmBigliettiPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mm_il_palazzo_mm_il_palazzo__["a" /* MmIlPalazzoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mm_le_collezioni_mm_le_collezioni__["a" /* MmLeCollezioniPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mm_la_biblioteca_mm_la_biblioteca__["a" /* MmLaBibliotecaPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mm_come_raggiungerci_mm_come_raggiungerci__["a" /* MmComeRaggiungerciPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mm_eventi_mm_eventi__["a" /* MmEventiPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mm_contatti_mm_contatti__["a" /* MmContattiPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_mm_condivisione_social_mm_condivisione_social__["a" /* MmCondivisioneSocialPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_mm_sale_espositive_mm_sale_espositive__["a" /* MmSaleEspositivePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_mp_informazioni_generali_mp_informazioni_generali__["a" /* MpInformazioniGeneraliPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_mp_contatti_mp_contatti__["a" /* MpContattiPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_mp_le_aree_museali_mp_le_aree_museali__["a" /* MpLeAreeMusealiPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_mm_percorsi_a_tema_mm_percorsi_a_tema__["a" /* MmPercorsiATemaPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_mm_mostre_mm_mostre__["a" /* MmMostrePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_test_calendar_test_calendar__["a" /* TestCalendarPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_eventi_calendario_eventi_calendario__["a" /* EventiCalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_mostre_mostre__["a" /* MostrePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_eventi_eventi__["a" /* EventiPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_instagram__["a" /* Instagram */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_market__["a" /* Market */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_calendar__["a" /* Calendar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mp_informazioni_generali_mp_informazioni_generali__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mp_le_aree_museali_mp_le_aree_museali__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mp_contatti_mp_contatti__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_test_calendar_test_calendar__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_text_to_speech__ = __webpack_require__(7);
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
    function MyApp(platform, statusBar, splashScreen, modalCtrl, menuCtrl, diagnostic, geolocation, alertCtrl, loadingCtrl, museiService, tts) {
        var _this = this;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.museiService = museiService;
        this.tts = tts;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //splashScreen.hide();
            //Intercetto quando l'app va in background o viene chiusa per stoppare la lettura vocale
            document.addEventListener("pause", function () {
                document.getElementById("mic").style.display = "inline";
                document.getElementById("disabled-mic").style.display = "none";
                _this.tts.speak("");
            }, false);
        });
        //Carico già all'avvio dell'app le geolocalizzazioni dei musei
        this.museiService.getGeolocalizzazioni().then(function (data) {
            _this.geoMusei = data;
        });
        //Carico già all'avvio dell'app le informazioni generali sull'istituzione
        this.museiService.getIstituzione().then(function (data) {
            _this.istituzione = data;
        });
    }
    MyApp.prototype.onLoad = function (service) {
        var _this = this;
        switch (service) {
            case "MuseoPiuVicinoService":
                //Parte un loader per mascherare il calcolo in background del museo piu vicino
                var spinnerLoading_1 = this.loadingCtrl.create();
                spinnerLoading_1.present();
                //Preparo tutti i popup da mostrare
                var alertAuthorized_1 = this.alertCtrl.create({
                    title: "Si prega di autorizzare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
                    buttons: ['OK']
                });
                var alertEnabled_1 = this.alertCtrl.create({
                    title: "Si prega di abilitare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
                    buttons: ['OK']
                });
                var alertFinale_1 = this.alertCtrl.create({
                    title: "Purtroppo non sono riuscito a localizzare il tuo dispositivo.",
                    buttons: ['OK']
                });
                //Per prima cosa controllo se è stata autorizzata la localizzazione
                this.diagnostic.isLocationAuthorized().then(function () {
                    //Poi controllo se la localizzazione è abilitata
                    _this.diagnostic.isLocationEnabled().then(function (response) {
                        if (response) {
                            //Rilevo la posizione e do 20 secondi di tempo per farcela
                            _this.geolocation.getCurrentPosition({ timeout: 20000 }).then(function (resp) {
                                spinnerLoading_1.dismiss();
                                //Richiamo il metodo che date le mie coordinate va a trovare il museo piu vicino
                                _this.calculateDistance(resp.coords.latitude, resp.coords.longitude);
                            }).catch(function () {
                                spinnerLoading_1.dismiss();
                                alertFinale_1.present();
                            });
                        }
                        else {
                            spinnerLoading_1.dismiss();
                            alertEnabled_1.present();
                        }
                    }).catch(function () {
                        spinnerLoading_1.dismiss();
                        alertEnabled_1.present();
                    });
                }).catch(function () {
                    spinnerLoading_1.dismiss();
                    alertAuthorized_1.present();
                });
                break;
            case "InformazioniGeneraliService":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_mp_informazioni_generali_mp_informazioni_generali__["a" /* MpInformazioniGeneraliPage */], { voceMenu: 'INFORMAZIONI GENERALI', contenuto: this.istituzione[0].INFORMAZIONI_GENERALI });
                this.nav.removeView(this.nav.last());
                break;
            case "ContattiGeneraliService":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_mp_contatti_mp_contatti__["a" /* MpContattiPage */], { voceMenu: 'CONTATTI', contenuto: this.istituzione[0].CONTATTI });
                this.nav.removeView(this.nav.last());
                break;
            case "AreeMusealiService":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_mp_le_aree_museali_mp_le_aree_museali__["a" /* MpLeAreeMusealiPage */], { voceMenu: 'AREE MUSEALI', contenuto: this.istituzione[0].AREE_MUSEALI });
                this.nav.removeView(this.nav.last());
                break;
            case "CalendarioService":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_test_calendar_test_calendar__["a" /* TestCalendarPage */], { voceMenu: 'CALENDARIO', contenuto: this.istituzione[0].AREE_MUSEALI });
                this.nav.removeView(this.nav.last());
                break;
            default:
                break;
        }
        this.menuCtrl.close();
    };
    MyApp.prototype.calculateDistance = function (latitudineIniziale, longitudineIniziale) {
        var R = 6371e3; // metres
        var distanzaMinore = 0;
        var museoPiuVicino;
        for (var key in this.geoMusei) {
            var φ1 = this.toRad(latitudineIniziale);
            var φ2 = this.toRad(this.geoMusei[key].LATITUDINE);
            var Δφ = this.toRad(this.geoMusei[key].LATITUDINE - latitudineIniziale);
            var Δλ = this.toRad(this.geoMusei[key].LONGITUDINE - longitudineIniziale);
            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            //Mi salvo la distanza minore del museo
            if (d < distanzaMinore || distanzaMinore === 0) {
                distanzaMinore = d;
                museoPiuVicino = this.geoMusei[key].MUSEO;
            }
        }
        //Mostro il museo piu vicino e la relativa distanza
        var alertDistanza = this.alertCtrl.create({
            title: "Il museo più vicino a te è il " + museoPiuVicino + " e dista circa " + Math.floor(distanzaMinore) + " metri.",
            buttons: ['OK']
        });
        alertDistanza.present();
    };
    MyApp.prototype.toRad = function (Value) {
        return Value * Math.PI / 180;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/'<ion-menu [content]="mycontent" id="menuPrincipale">\n    <ion-header class="size-button">\n        <ion-toolbar class="size-button">\n            <ion-title class="size-button gradientLoop">MENU</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button class="size-button button-fade gradientLoop" ion-item (click)="onLoad(\'LoginService\')">\n                <ion-icon name="contact" item-left></ion-icon>\n                Login\n            </button>\n            <button class="size-button button-fade gradientLoop" ion-item (click)="onLoad(\'InformazioniGeneraliService\')">\n                <ion-icon name="information-circle" item-left></ion-icon>\n                Informazioni generali\n            </button>\n            <button class="size-button button-fade gradientLoop" ion-item (click)="onLoad(\'AreeMusealiService\')">\n                <ion-icon name="list-box" item-left></ion-icon>\n                Aree Museali\n            </button>\n            <button class="size-button button-fade gradientLoop" ion-item (click)="onLoad(\'ContattiGeneraliService\')">\n                <ion-icon name="chatbubbles" item-left></ion-icon>\n                Contatti\n            </button>\n            <button #myElement class="size-button button-fade gradientLoop" ion-item (click)="onLoad(\'MuseoPiuVicinoService\')">\n                <ion-icon name="walk" item-left></ion-icon>\n                Museo più vicino a te\n            </button>\n            <button #myElement class="size-button button-fade gradientLoop" ion-item (click)="onLoad(\'CalendarioService\')">\n              <ion-icon name="walk" item-left></ion-icon>\n              Calendario\n          </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RicercaMuseiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(286);
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
    //Restituisce tutte le geolocalizzazioni dei musei
    RicercaMuseiProvider.prototype.getGeolocalizzazioni = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://www.omniservicetest.it/node/Musei/api/geolocalizzazioni', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    //Restituisce tutte le info dell'istituzione
    RicercaMuseiProvider.prototype.getIstituzione = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://www.omniservicetest.it/node/Musei/api/istituzione', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    //Restituisce tutte le mostre e gli eventi
    RicercaMuseiProvider.prototype.getEventiAndMostre = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://www.omniservicetest.it/node/Musei/api/eventi-mostre', { headers: headers })
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

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(7);
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
    function MuseiPage(navCtrl, navParams, museiService, loadingCtrl, alertCtrl, platform, tts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.museiService = museiService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.tts = tts;
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
                _this.tts.speak("");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__museo_museo__["a" /* MuseoPage */], { musei: data, classe1: _this.classMuseoArea, museiTotali: _this.musei, classeAreaTotale: _this.classeArea });
                _this.navCtrl.removeView(_this.navCtrl.last());
            }
        });
    };
    //evento che scatta al caricamento della pagina musei, serve a impostare le classi in modo dinamico nel css
    MuseiPage.prototype.ionViewDidLoad = function () {
        var idClass = document.getElementById('paginaArea');
        idClass.classList.remove(this.classeArea);
        idClass.classList.add(this.classeArea);
        this.initializeBackButton();
    };
    MuseiPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MuseiPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.goHomePage();
        });
    };
    //Associato al tasto per tornare all'home page.
    MuseiPage.prototype.goHomePage = function () {
        this.tts.speak("");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        //Ho notato che ogni volta viene creata il tag di una pagina musei o museo. Bisogna gestire il fatto di utilizzare sempre e solo una pagina per area e museo, in modo da non creare n. pagine.
        //var idRemovePage = document.getElementById('paginaArea');
        //idRemovePage.parentNode.removeChild(idRemovePage);
    };
    MuseiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musei',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/'<ion-content id="paginaArea" class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row id="row-1" class="rowHome">\n        <ion-col class="colHomeYellow">\n			<button class="back-musei" ion-button icon-only (click)="goHomePage()"><ion-icon name="arrow-back" id="arrow"></ion-icon></button>\n			<ion-card class="cardHome" (click)="findMuseo(musei[0].NOME)">\n    			<div class="card-title">{{musei[0].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-2" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[1].NOME)">\n    			<div class="card-title">{{musei[1].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-3" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[2].NOME)">\n    			<div class="card-title">{{musei[2].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n    <ion-row id="row-4" class="rowHome">\n        <ion-col class="colHome">\n			<ion-card class="cardHome" (click)="findMuseo(musei[3].NOME)">\n    			<div class="card-title">{{musei[3].NOME}}</div>\n  		  	</ion-card>\n	    </ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/musei/musei.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], MuseiPage);
    return MuseiPage;
}());

//# sourceMappingURL=musei.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musei_musei__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mostre_mostre__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventi_eventi__ = __webpack_require__(114);
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
    function HomePage(navCtrl, museiService, loadingCtrl, alertCtrl, platform, tts) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.museiService = museiService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.tts = tts;
        /*for ( let i=0; i < this.navCtrl.length(); i++ )
          {
              let v = this.navCtrl.getViews()[i];
              //console.log("Componente Home: " + v.component.name);
    
          }*/
        this.creaAlert();
        this.alertNotActive.onDidDismiss(function () {
            _this.creaAlert();
        });
    }
    HomePage.prototype.creaAlert = function () {
        var _this = this;
        this.alertNotActive = this.alertCtrl.create({
            title: 'Coming soon...',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.alertAperto = false;
                        _this.creaAlert();
                    }
                }
            ]
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.initializeBackButton();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    HomePage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            if (_this.alertAperto) {
                _this.alertAperto = false;
                _this.alertNotActive.dismiss();
                _this.creaAlert();
            }
            else {
                _this.tts.speak("");
                _this.platform.exitApp();
            }
        });
    };
    //Richiama il metodo che restituisce i musei associati ad un'area
    HomePage.prototype.findMusei = function (string, isActive) {
        var _this = this;
        if (isActive == false) {
            this.alertNotActive.present();
            this.alertNotActive.onDidDismiss(function () {
                _this.creaAlert();
            });
            this.alertAperto = true;
        }
        else {
            this.alertAperto = false;
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
                        _this.tts.speak("");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__museo_museo__["a" /* MuseoPage */], { musei: data, classe1: _this.classMuseo });
                        _this.navCtrl.removeView(_this.navCtrl.last());
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
                        _this.tts.speak("");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__musei_musei__["a" /* MuseiPage */], { musei: data, classe1: _this.classArea });
                        _this.navCtrl.removeView(_this.navCtrl.last());
                        console.log(_this.classArea);
                    }
                }
            });
        }
    };
    HomePage.prototype.findMostre = function () {
        var _this = this;
        var spinnerLoading = this.loadingCtrl.create({
            dismissOnPageChange: true
        });
        spinnerLoading.present();
        this.museiService.getEventiAndMostre().then(function (data) {
            _this.tts.speak("");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mostre_mostre__["a" /* MostrePage */], { mostre: data[0].MOSTRE });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    HomePage.prototype.findEventi = function () {
        var _this = this;
        var spinnerLoading = this.loadingCtrl.create({
            dismissOnPageChange: true
        });
        spinnerLoading.present();
        this.museiService.getEventiAndMostre().then(function (data) {
            _this.tts.speak("");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__eventi_eventi__["a" /* EventiPage */], { eventi: data[0].EVENTI });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/'<ion-content class="card-background-page">\n  <ion-grid class="gridHome">\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-archeologia" class="cardHome" (click)="findMusei(\'Archeologia\', false)" style="background-color: SaddleBrown">\n        <div class="card-gradient">\n    			<div class="card-title animated fadeInRight">Archeologia</div>\n        </div>\n  		 </ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n			<ion-card id="card-arteantica" class="cardHome" (click)="findMusei(\'Arte antica\', false)" style="background-color: red">\n        <div class="card-gradient">\n    			<div class="card-title animated fadeInRight">Arte antica</div>\n        </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-artemoderna" class="cardHome" (click)="findMusei(\'Arte moderna e contemporanea\', false)" style="background-color: Violet">\n        <div class="card-gradient">\n    			<div class="card-title animated fadeInRight">\n					Arte moderna e contemporanea\n				</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-musica" class="cardHome" (click)="findMusei(\'Musica\', true)" style="background-color: RebeccaPurple">\n            <div class="card-gradient">\n    			    <div class="card-title animated fadeInRight">Musica</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n    <ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-patrimonioindustriale" class="cardHome" (click)="findMusei(\'Patrimonio industriale e cultura tecnica\', false)" style="background-color: RoyalBlue">\n        <div class="card-gradient">\n    			<div class="card-title animated fadeInRight">Patrimonio industriale e Cultura tecnica</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-storiaememoria" class="cardHome" (click)="findMusei(\'Storia e Memoria\', false)" style="background-color: SeaGreen">\n            <div class="card-gradient">\n    			       <div class="card-title animated fadeInRight">Storia e Memoria</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n	<ion-row class="rowHome">\n        <ion-col class="colHome">\n			<ion-card id="card-mostre" class="cardHome" (click)="findMostre()" style="background-color: RoyalBlue">\n        <div class="card-gradient">\n    			<div class="card-title animated fadeInRight">Mostre</div>\n        </div>\n  		  	</ion-card>\n	    </ion-col>\n		<ion-col class="colHome">\n  	  		<ion-card id="card-eventi" class="cardHome" (click)="findEventi()" style="background-color: SeaGreen">\n            <div class="card-gradient">\n    			<div class="card-title animated fadeInRight">Eventi</div>\n            </div>\n  		  	</ion-card>\n		</ion-col>\n	</ion-row>\n	<div id="open-menu" class="animated fadeInLeft"><div id="line-menu"></div></div>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map