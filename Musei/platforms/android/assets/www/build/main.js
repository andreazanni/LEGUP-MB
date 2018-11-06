webpackJsonp([9],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmInformazioniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(22);
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
    function MmInformazioniPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
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
        console.log(idClass.offsetHeight);
        console.log(idContentHeader.offsetHeight);
        console.log(idContainerContenuto.style.height);
        this.menuCtrl.enable(false, "menuPrincipale");
        console.log(this.myVoceMenu);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MmInformazioniPage);
    return MmInformazioniPage;
}());

//# sourceMappingURL=mm-informazioni.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(84);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmOrariPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(22);
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
    function MmOrariPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
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
        console.log(idClass.offsetHeight);
        console.log(idContentHeader.offsetHeight);
        console.log(idContainerContenuto.style.height);
        this.menuCtrl.enable(false, "menuPrincipale");
        console.log(this.myVoceMenu);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MmOrariPage);
    return MmOrariPage;
}());

//# sourceMappingURL=mm-orari.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmBigliettiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(22);
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
    function MmBigliettiPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
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
        console.log(idClass.offsetHeight);
        console.log(idContentHeader.offsetHeight);
        console.log(idContainerContenuto.style.height);
        this.menuCtrl.enable(false, "menuPrincipale");
        console.log(this.myVoceMenu);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MmBigliettiPage);
    return MmBigliettiPage;
}());

//# sourceMappingURL=mm-biglietti.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmIlPalazzoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(22);
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
    function MmIlPalazzoPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
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
        console.log(idClass.offsetHeight);
        console.log(idContentHeader.offsetHeight);
        console.log(idContainerContenuto.style.height);
        this.menuCtrl.enable(false, "menuPrincipale");
        console.log(this.myVoceMenu);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MmIlPalazzoPage);
    return MmIlPalazzoPage;
}());

//# sourceMappingURL=mm-il-palazzo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmLeCollezioniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(22);
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
    function MmLeCollezioniPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
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
        console.log(idClass.offsetHeight);
        console.log(idContentHeader.offsetHeight);
        console.log(idContainerContenuto.style.height);
        this.menuCtrl.enable(false, "menuPrincipale");
        console.log(this.myVoceMenu);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MmLeCollezioniPage);
    return MmLeCollezioniPage;
}());

//# sourceMappingURL=mm-le-collezioni.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmLaBibliotecaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(22);
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
    function MmLaBibliotecaPage(navCtrl, navParams, tts, menuCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.menuCtrl = menuCtrl;
        this.nativePageTransitions = nativePageTransitions;
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
        console.log(idClass.offsetHeight);
        console.log(idContentHeader.offsetHeight);
        console.log(idContainerContenuto.style.height);
        this.menuCtrl.enable(false, "menuPrincipale");
        console.log(this.myVoceMenu);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MmLaBibliotecaPage);
    return MmLaBibliotecaPage;
}());

//# sourceMappingURL=mm-la-biblioteca.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu/menu.module": [
		286,
		8
	],
	"../pages/mm-biglietti/mm-biglietti.module": [
		287,
		7
	],
	"../pages/mm-il-palazzo/mm-il-palazzo.module": [
		288,
		6
	],
	"../pages/mm-informazioni/mm-informazioni.module": [
		289,
		5
	],
	"../pages/mm-la-biblioteca/mm-la-biblioteca.module": [
		290,
		4
	],
	"../pages/mm-le-collezioni/mm-le-collezioni.module": [
		291,
		3
	],
	"../pages/mm-orari/mm-orari.module": [
		292,
		2
	],
	"../pages/musei/musei.module": [
		293,
		1
	],
	"../pages/museo/museo.module": [
		294,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musei_musei__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__museo_museo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(84);
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
        /*for ( let i=0; i < this.navCtrl.length(); i++ )
          {
              let v = this.navCtrl.getViews()[i];
              //console.log("Componente Home: " + v.component.name);
    
          }*/
    }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(106);
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mm_informazioni_mm_informazioni__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mm_orari_mm_orari__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mm_biglietti_mm_biglietti__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mm_il_palazzo_mm_il_palazzo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mm_le_collezioni_mm_le_collezioni__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mm_la_biblioteca_mm_la_biblioteca__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__museo_museo__ = __webpack_require__(45);
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
    function MenuPage(navCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.museo = this.navParams.get('datiMuseo');
        this.classe = this.navParams.get('museoClass');
        this.ultimo = this.navParams.get('ultimo');
    }
    MenuPage.prototype.return = function () {
        this.onLoad(this.ultimo, false);
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
                break;
            case "PalazzoService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mm_il_palazzo_mm_il_palazzo__["a" /* MmIlPalazzoPage */], { datiMuseo: this.museo, voceMenu: 'IL PALAZZO', contenuto: this.museo[0].IL_PALAZZO, museoClass: this.classe, contentClass: 'content_il_palazzo' });
                break;
            case "CollezioniService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mm_le_collezioni_mm_le_collezioni__["a" /* MmLeCollezioniPage */], { datiMuseo: this.museo, voceMenu: 'LE COLLEZIONI', contenuto: this.museo[0].LE_COLLEZIONI, museoClass: this.classe, contentClass: 'content_le_collezioni' });
                break;
            case "BibliotecaService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__mm_la_biblioteca_mm_la_biblioteca__["a" /* MmLaBibliotecaPage */], { datiMuseo: this.museo, voceMenu: 'LA BIBLIOTECA', contenuto: this.museo[0].LA_BIBLIOTECA, museoClass: this.classe, contentClass: 'content_la_biblioteca' });
                break;
            case "InformazioniService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mm_informazioni_mm_informazioni__["a" /* MmInformazioniPage */], { datiMuseo: this.museo, voceMenu: 'INFORMAZIONI', contenuto: this.museo[0].INFO, museoClass: this.classe, contentClass: 'content_informazioni' });
                break;
            case "OrariService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mm_orari_mm_orari__["a" /* MmOrariPage */], { datiMuseo: this.museo, voceMenu: 'ORARI', contenuto: this.museo[0].ORARI, museoClass: this.classe, contentClass: 'content_orari' });
                break;
            case "BigliettiService":
                if (animation) {
                    this.nativePageTransitions.flip(options);
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mm_biglietti_mm_biglietti__["a" /* MmBigliettiPage */], { datiMuseo: this.museo, voceMenu: 'BIGLIETTI', contenuto: this.museo[0].BIGLIETTI, museoClass: this.classe, contentClass: 'content_biglietti' });
                break;
            default:
                break;
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/menu/menu.html"*/'<ion-header>\n<ion-toolbar>\n    <ion-title>MENU</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="return()">\n            <ion-icon name="arrow-forward" class="toolbar-title"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <button ion-item (click)="onLoad(\'LoginService\', \'true\')">\n            <ion-icon name="contact" item-left></ion-icon>\n            Login\n        </button>\n        <button ion-item (click)="onLoad(\'MuseoService\', \'true\')">\n            <ion-icon name="archive" item-left></ion-icon>\n            Il Museo\n        </button>\n        <button ion-item (click)="onLoad(\'PalazzoService\', \'true\')">\n            <ion-icon name="construct" item-left></ion-icon>\n            Il Palazzo\n        </button>\n        <button ion-item (click)="onLoad(\'CollezioniService\', \'true\')">\n            <ion-icon name="images" item-left></ion-icon>\n            Le Collezioni\n        </button>\n        <button ion-item (click)="onLoad(\'BibliotecaService\', \'true\')">\n            <ion-icon name="book" item-left></ion-icon>\n            La Biblioteca\n        </button>\n        <button ion-item (click)="onLoad(\'InformazioniService\', \'true\')">\n            <ion-icon name="information-circle" item-left></ion-icon>\n            Informazioni\n        </button>\n        <button ion-item (click)="onLoad(\'IndicazioniService\', \'true\')">\n            <ion-icon name="pin" item-left></ion-icon>\n            Come raggiungerci\n        </button>\n        <button ion-item (click)="onLoad(\'OrariService\', \'true\')">\n            <ion-icon name="alarm" item-left></ion-icon>\n            Orari\n        </button>\n        <button ion-item (click)="onLoad(\'BigliettiService\', \'true\')">\n            <ion-icon name="paper" item-left></ion-icon>\n            Biglietti\n        </button>\n        <button ion-item (click)="onLoad(\'NewsService\', \'true\')">\n            <ion-icon name="paper-plane" item-left></ion-icon>\n            News\n        </button>\n        <button ion-item (click)="onLoad(\'SocialService\', \'true\')">\n            <ion-icon name="logo-facebook" item-left></ion-icon>\n            Condivisione Social\n        </button>\n        <button ion-item (click)="onLoad(PercorsiService, \'true\')">\n            <ion-icon name="git-compare" item-left></ion-icon>\n            Percorsi Trasversali\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_musei_musei__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_museo_museo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_ricerca_musei_ricerca_musei__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mm_informazioni_mm_informazioni__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mm_orari_mm_orari__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mm_biglietti_mm_biglietti__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_mm_il_palazzo_mm_il_palazzo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mm_le_collezioni_mm_le_collezioni__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mm_la_biblioteca_mm_la_biblioteca__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_menu_menu__ = __webpack_require__(23);
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
                __WEBPACK_IMPORTED_MODULE_23__pages_menu_menu__["a" /* MenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mm-biglietti/mm-biglietti.module#MmBigliettiPageModule', name: 'MmBigliettiPage', segment: 'mm-biglietti', priority: 'low', defaultHistory: [] },
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_23__pages_menu_menu__["a" /* MenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_ricerca_musei_ricerca_musei__["a" /* RicercaMuseiProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(211);
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
        switch (service) {
            case "SocialService":
                this.socialSharing.canShareVia("instagram").then(function () {
                    _this.socialSharing.shareViaInstagram("Museo Archeologia", null);
                }).catch(function (err) {
                    alert("Errore! Non sono riuscito a connettermi con il social.");
                });
                break;
            case "MuseoPiuVicinoService":
                this.diagnostic.isLocationAvailable().then(function (success) {
                    alert("Location: " + success);
                }).catch(function (error) {
                    alert(error);
                });
                this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log("Longitudine: " + resp.coords.longitude + " Latitudine: " + resp.coords.latitude);
                    //var distance = this.calculateDistance(resp.coords.latitude, resp.coords.longitude) ;
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
        //var museo;
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
                //museo = musei[key].museo;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/'<ion-menu [content]="mycontent" id="menuPrincipale">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="contact" item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)="onLoad(\'MuseoPiuVicinoService\')">\n                <ion-icon name="walk" item-left></ion-icon>\n                Il museo più vicino a te\n            </button>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="information-circle" item-left></ion-icon>\n                Informazioni generali\n            </button>\n            <button ion-item (click)=onLoad(LoginService)>\n                <ion-icon name="chatbubbles" item-left></ion-icon>\n                Contatti\n            </button>      \n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent></ion-nav>'/*ion-inline-end:"/Users/andreazanni/Documents/GitHub/LEGUP-MB/Musei/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuseoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(22);
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
    function MuseoPage(menuCtrl, navCtrl, navParams, tts, nativePageTransitions) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.nativePageTransitions = nativePageTransitions;
        this.museo = this.navParams.get('musei');
        this.classeMuseo = this.navParams.get('classe1');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], MuseoPage);
    return MuseoPage;
}());

//# sourceMappingURL=museo.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RicercaMuseiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
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

},[212]);
//# sourceMappingURL=main.js.map