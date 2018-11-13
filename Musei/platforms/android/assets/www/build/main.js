webpackJsonp([10],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmInformazioniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(21);
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
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmInformazioni');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
        idCardContenuto.innerHTML = this.myContenuto;
        var idContainerContenuto = document.getElementById('container-contenuto');
        var idContentHeader = document.getElementById('content-header');
        //calcolo l'altezza del contenitore contenuto sottraendo dall'altezza della pagina quella dell'header. Tolgo anche i 24px del padding che contengono il testo per far "respirare"
        //lo scrolling su lato inferiore
        idContainerContenuto.style.height = (idClass.offsetHeight - idContentHeader.offsetHeight) - 24 + "px";
        this.menuCtrl.enable(false, "menuPrincipale");
        this.initializeBackButton();
        /*fetch('http://informa.comune.bologna.it/iperbole/rss/events/25', {mode: 'no-cors'}).then((res) => {
         res.text().then((xmlTxt) => {
           var domParser = new DOMParser()
           let doc = domParser.parseFromString(xmlTxt, 'text/html')
           doc.querySelectorAll('item').forEach((item) => {
              let h1 = document.createElement('h1')
               h1.textContent = item.querySelector('title').textContent
                document.querySelector('output').appendChild(h1)
                console.log(item.querySelector('title').textContent)
                //console.log(document.querySelector('output').appendChild(h1))
              })
            })
       })*/
    };
    MmInformazioniPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MmInformazioniPage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmInformazioniPage.prototype.openMenu = function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmInformazioniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-informazioni',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-informazioni/mm-informazioni.html"*/'<ion-content id="paginaMmInformazioni" class="card-background-page">\n	<ion-card id="content-header" class="headerContent">\n		<button class="sideMenu" ion-button (click)="openMenu()">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title" id="content_cardTitle"></div>\n      <div class="card-subtitle" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n  \n  \n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-informazioni/mm-informazioni.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmInformazioniPage);
    return MmInformazioniPage;
}());

//# sourceMappingURL=mm-informazioni.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmOrariPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(21);
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
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmOrari');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        ;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmOrariPage.prototype.openMenu = function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmOrariPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-orari',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-orari/mm-orari.html"*/'<ion-content id="paginaMmOrari" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title" id="content_cardTitle"></div>\n        <div class="card-subtitle" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content">\n      <div id="container-contenuto">\n        <div id="contenuto" class="content-content">\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-orari/mm-orari.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmOrariPage);
    return MmOrariPage;
}());

//# sourceMappingURL=mm-orari.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmBigliettiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(21);
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
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmBiglietti');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmBigliettiPage.prototype.openMenu = function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmBigliettiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-biglietti',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-biglietti/mm-biglietti.html"*/'<ion-content id="paginaMmBiglietti" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title" id="content_cardTitle"></div>\n        <div class="card-subtitle" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content">\n      <div id="container-contenuto">\n        <div id="contenuto" class="content-content">\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-biglietti/mm-biglietti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmBigliettiPage);
    return MmBigliettiPage;
}());

//# sourceMappingURL=mm-biglietti.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmIlPalazzoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(21);
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
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmIlPalazzo');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmIlPalazzoPage.prototype.openMenu = function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmIlPalazzoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-il-palazzo',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-il-palazzo/mm-il-palazzo.html"*/'<ion-content id="paginaMmIlPalazzo" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title" id="content_cardTitle"></div>\n        <div class="card-subtitle" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content">\n      <div id="container-contenuto">\n        <div id="contenuto" class="content-content">\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-il-palazzo/mm-il-palazzo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmIlPalazzoPage);
    return MmIlPalazzoPage;
}());

//# sourceMappingURL=mm-il-palazzo.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmLeCollezioniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(21);
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
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmLeCollezioni');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmLeCollezioniPage.prototype.openMenu = function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmLeCollezioniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-le-collezioni',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-le-collezioni/mm-le-collezioni.html"*/'<ion-content id="paginaMmLeCollezioni" class="card-background-page">\n	<ion-card id="content-header" class="headerContent">\n		<button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title" id="content_cardTitle"></div>\n      <div class="card-subtitle" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-le-collezioni/mm-le-collezioni.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmLeCollezioniPage);
    return MmLeCollezioniPage;
}());

//# sourceMappingURL=mm-le-collezioni.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmLaBibliotecaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(21);
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
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmLaBiblioteca');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmLaBibliotecaPage.prototype.openMenu = function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmLaBibliotecaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-la-biblioteca',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-la-biblioteca/mm-la-biblioteca.html"*/'<ion-content id="paginaMmLaBiblioteca" class="card-background-page">\n  <ion-card id="content-header" class="headerContent">\n    <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n      <ion-icon name="mic"></ion-icon>\n    </button>\n    <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n      <ion-icon name="mic-off"></ion-icon>\n    </button>\n    <button class="home-button" ion-button icon-only (click)="goHomePage()">\n      <ion-icon name="home"></ion-icon>\n    </button>\n    <div class="card-head">\n      <div class="card-title" id="content_cardTitle"></div>\n      <div class="card-subtitle" id="content_cardSubTitle"></div>\n    </div>\n  </ion-card>\n  <ion-card id="card-contenuto" class="container-content">\n    <div id="container-contenuto">\n      <div id="contenuto" class="content-content">\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-la-biblioteca/mm-la-biblioteca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MmLaBibliotecaPage);
    return MmLaBibliotecaPage;
}());

//# sourceMappingURL=mm-la-biblioteca.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmComeRaggiungerciPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(87);
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
    }
    MmComeRaggiungerciPage.prototype.ionViewDidLoad = function () {
        // personalizzo la pagina di contenuto in base al museo e alla voce di menù selezionata
        console.log(this.myContenuto);
        var idClass = document.getElementById('paginaMmComeRaggiungerci');
        idClass.classList.add(this.myMuseoClass);
        document.getElementById('content_cardTitle').innerText = this.myVoceMenu;
        document.getElementById('content_cardSubTitle').innerText = this.myMuseo[0].NOME;
        var idCardContenuto = document.getElementById('contenuto');
        console.log(idCardContenuto);
        idCardContenuto.innerHTML = this.myContenuto;
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__museo_museo__["a" /* MuseoPage */], { musei: _this.myMuseo, classe1: _this.myMuseoClass });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    //Apre il side menu
    MmComeRaggiungerciPage.prototype.openMenu = function () {
        var options = {
            direction: 'right',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */], { datiMuseo: this.myMuseo, museoClass: this.myMuseoClass, ultimo: "IndicazioniService" }, { animate: true, direction: "back" });
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
        var _this = this;
        //Parte un loader per mascherare il calcolo in background del museo piu vicino
        var spinnerLoading = this.loadingCtrl.create();
        spinnerLoading.present();
        //Preparo tutti i popup da mostrare
        var alertAuthorized = this.alertCtrl.create({
            title: "Si prega di autorizzare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
            buttons: ['OK']
        });
        var alertEnabled = this.alertCtrl.create({
            title: "Si prega di abilitare la localizzazione del dispositivo per poter utilizzare questa funzionalita', grazie.",
            buttons: ['OK']
        });
        var alertFinale = this.alertCtrl.create({
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
                        spinnerLoading.dismiss();
                        var destination = [44.4928659, 11.3502549];
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
                        _this.launchNavigator.navigate(destination, options)
                            .then(function (success) { return alert('Launched navigator'); }, function (error) { return alert('Error launching navigator: ' + error); });
                    }).catch(function () {
                        spinnerLoading.dismiss();
                        alertFinale.present();
                    });
                }
                else {
                    spinnerLoading.dismiss();
                    alertEnabled.present();
                }
            }).catch(function () {
                spinnerLoading.dismiss();
                alertEnabled.present();
            });
        }).catch(function () {
            spinnerLoading.dismiss();
            alertAuthorized.present();
        });
        //this.navCtrl.push(HomePage);
        //this.navCtrl.removeView(this.navCtrl.last());
        //this.menuCtrl.enable(true, "menuPrincipale");
    };
    MmComeRaggiungerciPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mm-come-raggiungerci',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-come-raggiungerci/mm-come-raggiungerci.html"*/'<ion-content id="paginaMmComeRaggiungerci" class="card-background-page">\n    <ion-card id="content-header" class="headerContent">\n      <button class="sideMenu" ion-button menuToggle (click)="openMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n        <ion-icon name="mic"></ion-icon>\n      </button>\n      <button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n        <ion-icon name="mic-off"></ion-icon>\n      </button>\n      <button class="home-button" ion-button icon-only (click)="goHomePage()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <div class="card-head">\n        <div class="card-title" id="content_cardTitle"></div>\n        <div class="card-subtitle" id="content_cardSubTitle"></div>\n      </div>\n    </ion-card>\n    <ion-card id="card-contenuto" class="container-content">\n      <div id="container-contenuto">\n        <div id="contenuto" class="content-content">\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/mm-come-raggiungerci/mm-come-raggiungerci.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MmComeRaggiungerciPage);
    return MmComeRaggiungerciPage;
}());

//# sourceMappingURL=mm-come-raggiungerci.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__musei_musei__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(21);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.removeView(this.navCtrl.last());
        //Riabilito il menu principale e disabilito quello specifico del museo
        this.menuCtrl.enable(true, "menuPrincipale");
    };
    MuseoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-museo',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/'<ion-content id="paginaMuseo" class="card-background-page">\n	<ion-card class="cardHome" style="background-color: yellow">\n		<button class="sideMenu" ion-button (click)="openMenu()">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<button class="vocal-button" id="mic" ion-button icon-only (click)="read()">\n			<ion-icon name="mic"></ion-icon>\n		</button>\n		<button class="vocal-button" id="disabled-mic" style="display:none" ion-button icon-only (click)="stopRead()">\n			<ion-icon name="mic-off"></ion-icon>\n		</button>\n		<button class="home-button" ion-button icon-only (click)="goHomePage()">\n			<ion-icon name="home"></ion-icon>\n		</button>\n    	<div class="card-title" id="museo_cardTitle">{{museo[0].NOME}}\n				<div class="museo-content" id="descrizione">\n				</div>\n			</div>\n  	</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/museo/museo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MuseoPage);
    return MuseoPage;
}());

//# sourceMappingURL=museo.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu/menu.module": [
		288,
		9
	],
	"../pages/mm-biglietti/mm-biglietti.module": [
		289,
		8
	],
	"../pages/mm-come-raggiungerci/mm-come-raggiungerci.module": [
		290,
		7
	],
	"../pages/mm-il-palazzo/mm-il-palazzo.module": [
		291,
		6
	],
	"../pages/mm-informazioni/mm-informazioni.module": [
		292,
		5
	],
	"../pages/mm-la-biblioteca/mm-la-biblioteca.module": [
		293,
		4
	],
	"../pages/mm-le-collezioni/mm-le-collezioni.module": [
		294,
		3
	],
	"../pages/mm-orari/mm-orari.module": [
		295,
		2
	],
	"../pages/musei/musei.module": [
		296,
		1
	],
	"../pages/museo/museo.module": [
		297,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musei_musei__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
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
    function HomePage(navCtrl, museiService, loadingCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.museiService = museiService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        /*for ( let i=0; i < this.navCtrl.length(); i++ )
          {
              let v = this.navCtrl.getViews()[i];
              //console.log("Componente Home: " + v.component.name);
    
          }*/
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.initializeBackButton();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    HomePage.prototype.initializeBackButton = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.platform.exitApp();
        });
    };
    //Richiama il metodo che restituisce i musei associati ad un'area
    HomePage.prototype.findMusei = function (string, isActive) {
        var _this = this;
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__musei_musei__["a" /* MuseiPage */], { musei: data, classe1: _this.classArea });
                        _this.navCtrl.removeView(_this.navCtrl.last());
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(109);
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mm_informazioni_mm_informazioni__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mm_orari_mm_orari__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mm_biglietti_mm_biglietti__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mm_il_palazzo_mm_il_palazzo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mm_le_collezioni_mm_le_collezioni__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mm_la_biblioteca_mm_la_biblioteca__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mm_come_raggiungerci_mm_come_raggiungerci__ = __webpack_require__(116);
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
    function MenuPage(navCtrl, navParams, nativePageTransitions, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__museo_museo__["a" /* MuseoPage */], { musei: _this.museo, classe1: _this.classe });
            _this.navCtrl.removeView(_this.navCtrl.last());
        });
    };
    MenuPage.prototype.onLoad = function (service, animation) {
        var options = {
            direction: 'left',
            duration: 600
        };
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mm_il_palazzo_mm_il_palazzo__["a" /* MmIlPalazzoPage */], { datiMuseo: this.museo, voceMenu: 'IL PALAZZO', contenuto: this.museo[0].IL_PALAZZO, museoClass: this.classe, contentClass: 'content_il_palazzo' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "CollezioniService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mm_le_collezioni_mm_le_collezioni__["a" /* MmLeCollezioniPage */], { datiMuseo: this.museo, voceMenu: 'LE COLLEZIONI', contenuto: this.museo[0].LE_COLLEZIONI, museoClass: this.classe, contentClass: 'content_le_collezioni' });
                this.navCtrl.removeView(this.navCtrl.last());
                break;
            case "BibliotecaService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__mm_la_biblioteca_mm_la_biblioteca__["a" /* MmLaBibliotecaPage */], { datiMuseo: this.museo, voceMenu: 'LA BIBLIOTECA', contenuto: this.museo[0].LA_BIBLIOTECA, museoClass: this.classe, contentClass: 'content_la_biblioteca' });
                this.navCtrl.removeView(this.navCtrl.last());
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
            default:
                break;
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/menu/menu.html"*/'<ion-header>\n<ion-toolbar>\n    <ion-title>MENU</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="return()">\n            <ion-icon name="arrow-forward" class="toolbar-title"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <button ion-item (click)="onLoad(\'LoginService\', \'true\')">\n            <ion-icon name="contact" item-left></ion-icon>\n            Login\n        </button>\n        <button ion-item (click)="onLoad(\'MuseoService\', \'true\')">\n            <ion-icon name="archive" item-left></ion-icon>\n            Il Museo\n        </button>\n        <button ion-item (click)="onLoad(\'PalazzoService\', \'true\')">\n            <ion-icon name="construct" item-left></ion-icon>\n            Il Palazzo\n        </button>\n        <button ion-item (click)="onLoad(\'CollezioniService\', \'true\')">\n            <ion-icon name="images" item-left></ion-icon>\n            Le Collezioni\n        </button>\n        <button ion-item (click)="onLoad(\'BibliotecaService\', \'true\')">\n            <ion-icon name="book" item-left></ion-icon>\n            La Biblioteca\n        </button>\n        <button ion-item (click)="onLoad(\'InformazioniService\', \'true\')">\n            <ion-icon name="information-circle" item-left></ion-icon>\n            Informazioni\n        </button>\n        <button ion-item (click)="onLoad(\'IndicazioniService\', \'true\')">\n            <ion-icon name="pin" item-left></ion-icon>\n            Come raggiungerci\n        </button>\n        <button ion-item (click)="onLoad(\'OrariService\', \'true\')">\n            <ion-icon name="alarm" item-left></ion-icon>\n            Orari\n        </button>\n        <button ion-item (click)="onLoad(\'BigliettiService\', \'true\')">\n            <ion-icon name="paper" item-left></ion-icon>\n            Biglietti\n        </button>\n        <button ion-item (click)="onLoad(\'NewsService\', \'true\')">\n            <ion-icon name="paper-plane" item-left></ion-icon>\n            News\n        </button>\n        <button ion-item (click)="onLoad(\'SocialService\', \'true\')">\n            <ion-icon name="logo-facebook" item-left></ion-icon>\n            Condivisione Social\n        </button>\n        <button ion-item (click)="onLoad(PercorsiService, \'true\')">\n            <ion-icon name="git-compare" item-left></ion-icon>\n            Percorsi Trasversali\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_musei_musei__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mm_informazioni_mm_informazioni__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mm_orari_mm_orari__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mm_biglietti_mm_biglietti__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_mm_il_palazzo_mm_il_palazzo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mm_le_collezioni_mm_le_collezioni__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mm_la_biblioteca_mm_la_biblioteca__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_mm_come_raggiungerci_mm_come_raggiungerci__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_menu_menu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_launch_navigator__ = __webpack_require__(171);
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
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_11__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_museo_museo__["a" /* MuseoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mm_informazioni_mm_informazioni__["a" /* MmInformazioniPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mm_orari_mm_orari__["a" /* MmOrariPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mm_biglietti_mm_biglietti__["a" /* MmBigliettiPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_mm_il_palazzo_mm_il_palazzo__["a" /* MmIlPalazzoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mm_le_collezioni_mm_le_collezioni__["a" /* MmLeCollezioniPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mm_la_biblioteca_mm_la_biblioteca__["a" /* MmLaBibliotecaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mm_come_raggiungerci_mm_come_raggiungerci__["a" /* MmComeRaggiungerciPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_menu_menu__["a" /* MenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    navExitApp: false
                }, {
                    links: [
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-biglietti/mm-biglietti.module#MmBigliettiPageModule', name: 'MmBigliettiPage', segment: 'mm-biglietti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-come-raggiungerci/mm-come-raggiungerci.module#MmComeRaggiungerciPageModule', name: 'MmComeRaggiungerciPage', segment: 'mm-come-raggiungerci', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-il-palazzo/mm-il-palazzo.module#MmIlPalazzoPageModule', name: 'MmIlPalazzoPage', segment: 'mm-il-palazzo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-informazioni/mm-informazioni.module#MmInformazioniPageModule', name: 'MmInformazioniPage', segment: 'mm-informazioni', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-la-biblioteca/mm-la-biblioteca.module#MmLaBibliotecaPageModule', name: 'MmLaBibliotecaPage', segment: 'mm-la-biblioteca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-le-collezioni/mm-le-collezioni.module#MmLeCollezioniPageModule', name: 'MmLeCollezioniPage', segment: 'mm-le-collezioni', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-orari/mm-orari.module#MmOrariPageModule', name: 'MmOrariPage', segment: 'mm-orari', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/musei/musei.module#MuseiPageModule', name: 'MuseiPage', segment: 'musei', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/museo/museo.module#MuseoPageModule', name: 'MuseoPage', segment: 'museo', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_11__pages_musei_musei__["a" /* MuseiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_museo_museo__["a" /* MuseoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mm_informazioni_mm_informazioni__["a" /* MmInformazioniPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mm_orari_mm_orari__["a" /* MmOrariPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mm_biglietti_mm_biglietti__["a" /* MmBigliettiPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_mm_il_palazzo_mm_il_palazzo__["a" /* MmIlPalazzoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mm_le_collezioni_mm_le_collezioni__["a" /* MmLeCollezioniPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mm_la_biblioteca_mm_la_biblioteca__["a" /* MmLaBibliotecaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mm_come_raggiungerci_mm_come_raggiungerci__["a" /* MmComeRaggiungerciPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_menu_menu__["a" /* MenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
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
    function MyApp(socialSharing, platform, statusBar, splashScreen, modalCtrl, menuCtrl, diagnostic, geolocation, alertCtrl, loadingCtrl, museiService) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.menuCtrl = menuCtrl;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.museiService = museiService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //splashScreen.hide();
        });
        //Carico già all'avvio dell'app le geolocalizzazioni dei musei
        this.museiService.getGeolocalizzazioni().then(function (data) {
            _this.geoMusei = data;
        });
    }
    MyApp.prototype.onLoad = function (service) {
        var _this = this;
        switch (service) {
            case "SocialService":
                this.socialSharing.canShareVia("instagram").then(function () {
                    _this.socialSharing.shareViaInstagram("Museo Archeologia", null);
                }).catch(function (err) {
                    alert("Errore! Non sono riuscito a connettermi con il social.");
                });
                break;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/'<ion-menu [content]="mycontent" id="menuPrincipale">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="contact" item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)="onLoad(\'MuseoPiuVicinoService\')">\n                <ion-icon name="walk" item-left></ion-icon>\n                Il museo più vicino a te\n            </button>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="information-circle" item-left></ion-icon>\n                Informazioni generali\n            </button>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="chatbubbles" item-left></ion-icon>\n                Contatti\n            </button>      \n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(269);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(52);
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
    function MuseiPage(navCtrl, navParams, museiService, loadingCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.museiService = museiService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MuseiPage);
    return MuseiPage;
}());

//# sourceMappingURL=musei.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map