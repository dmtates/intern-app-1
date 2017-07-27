webpackJsonp([0],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kisiler_kisiler__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mesajlar_mesajlar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profil_profil__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HelloIonicPage = (function () {
    function HelloIonicPage(navCtrl, facebook, tst, zone, storage) {
        this.navCtrl = navCtrl;
        this.facebook = facebook;
        this.tst = tst;
        this.zone = zone;
        this.storage = storage;
        this.Kisiler = __WEBPACK_IMPORTED_MODULE_5__kisiler_kisiler__["a" /* KisilerPage */];
        this.Mesajlar = __WEBPACK_IMPORTED_MODULE_6__mesajlar_mesajlar__["a" /* MesajlarPage */];
        this.Profil = __WEBPACK_IMPORTED_MODULE_7__profil_profil__["a" /* ProfilPage */];
        this.userProfile = null;
    }
    HelloIonicPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            var username = val.displayName;
            _this.userProfile = val;
            _this.presentToast('Hoşgeldin  ' + username);
        }).catch(function (error) { _this.presentToast('Lütfen giriş yapınız'); });
    };
    HelloIonicPage.prototype.scrollTo = function () {
        // set the scrollLeft to 0px, and scrollTop to 500px
        // the scroll duration should take 200ms
        this.content.scrollTo(0, 500, 200);
    };
    HelloIonicPage.prototype.presentToast = function (msj) {
        var toast = this.tst.create({
            message: msj,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    HelloIonicPage.prototype.openLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HelloIonicPage.prototype.Logout = function () {
        this.storage.remove('user');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.presentToast('Çıkış Yapıldı.');
    };
    return HelloIonicPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
], HelloIonicPage.prototype, "content", void 0);
HelloIonicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\hello-ionic\hello-ionic.html"*/'\n\n<ion-content padding>\n<ion-tabs selectedIndex="1">\n  <ion-tab tabIcon="contacts" tabTitle="Kişiler" [root]="Kisiler">Kisiler</ion-tab> \n  <ion-tab tabIcon="chatbubbles" tabTitle="Mesajlar" [root]="Mesajlar">Mesajlar</ion-tab>\n   <ion-tab tabIcon="contact" tabTitle="Profil" [root]="Profil">Profil</ion-tab>\n\n</ion-tabs>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\hello-ionic\hello-ionic.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
], HelloIonicPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(64);
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
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, tst, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tst = tst;
        this.loadingCtrl = loadingCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.presentToast = function (msj) {
        var toast = this.tst.create({
            message: msj,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    RegisterPage.prototype.openLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.registerWithEmailAndPassword = function () {
        var _this = this;
        if (this.username != null && this.email != null) {
            if (this.password === this.re_pass) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (success) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('user/' + success.uid).set({
                        username: _this.username,
                        email: success.email
                    });
                    _this.presentLoadingDefault();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }).catch(function (error) {
                    _this.presentToast(error);
                });
            }
            else {
                this.presentToast("Girilen şifreler eşleşmiyor.Lütfen kontrol ediniz!");
            }
        }
        else {
            this.presentToast("Username ve email alanı boş geçilemez!");
        }
    };
    RegisterPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Kayıt yapılıyor...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="login">\n<img class="logo" src="vakifbank.logo.jpg"/>\n<ion-list class="login-giris-input" >\n\n  <ion-item>\n    <ion-label>Username</ion-label>\n    <ion-input [value]="username" [(ngModel)]="username"type="text"></ion-input>\n  </ion-item>\n <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input type="email" [value]="email" [(ngModel)]="email"></ion-input>\n  </ion-item>\n  <ion-item margin-top>\n    <ion-label>Password</ion-label>\n    <ion-input [value]="password" [(ngModel)]="password" type="password"></ion-input>\n  </ion-item>\n<ion-item margin-top>\n    <ion-label>Re_Type Password</ion-label>\n    <ion-input [value]="re_pass" [(ngModel)]="re_pass"  type="password"></ion-input>\n  </ion-item>\n</ion-list>\n <div padding   class="butonlar">\n<button class="register-button" ion-button (click)=\'registerWithEmailAndPassword()\' color="#FDB813" block >REGİSTER</button>\n \n<p text-center>Zaten kayıtlı mısın?<u><a (click)=\'openLoginPage()\'>Giriş için tıkla</a></u></p>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 243;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KisilerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the KisilerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var KisilerPage = (function () {
    function KisilerPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.kisiler = [];
        this.presentLoadingDefault();
    }
    KisilerPage.prototype.getUsers = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('user').once('value').then(function (kisi) {
            kisi.forEach(function (child) {
                var kisi = { key: child.key,
                    username: child.child('username').val()
                };
                _this.kisiler.push(kisi);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    KisilerPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Kişiler Yükleniyor...'
        });
        loading.present().then(function () {
            _this.getUsers();
            loading.dismiss();
        });
    };
    KisilerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KisilerPage');
    };
    return KisilerPage;
}());
KisilerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-kisiler',template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\kisiler\kisiler.html"*/'<!--\n  Generated template for the KisilerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n<ion-list>\n    <button ion-item *ngFor="let user of kisiler" >\n      <ion-avatar item-start>\n        <img src="vakifbank.logo.jpg">\n      </ion-avatar>\n      <h2>{{user.username}}</h2>\n	   </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\kisiler\kisiler.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], KisilerPage);

//# sourceMappingURL=kisiler.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesajlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the MesajlarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MesajlarPage = (function () {
    function MesajlarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getMessages();
    }
    MesajlarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesajlarPage');
    };
    MesajlarPage.prototype.getMessages = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('messages');
        ref.orderByChild("a_id")
            .equalTo("f8d2c179zOPiKiu6K2HdfTuDw6E3")
            .on("child_added", function (snapshot) {
            console.log(snapshot.val());
        });
    };
    return MesajlarPage;
}());
MesajlarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mesajlar',template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\mesajlar\mesajlar.html"*/'<!--\n  Generated template for the MesajlarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n\n<ion-list>\n\n  <ion-item>\n    <ion-label stacked>Mesaj:</ion-label>\n    <ion-input [value]="mesaj"  [(ngModel)]="mesaj" type="text"></ion-input>\n  </ion-item>\n\n\n</ion-list>\n\n<div padding>\n<button class="gonderbutton" tabIcon="arrow-dropright-circle" ion-button color="#FDB813" block>Gönder</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\mesajlar\mesajlar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MesajlarPage);

//# sourceMappingURL=mesajlar.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(64);
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
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilPage = (function () {
    function ProfilPage(zone, navCtrl, navParams, storage, tst) {
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.tst = tst;
        this.userProfile = null;
        // this.getUserDetails();
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage.prototype.presentToast = function (msj) {
        var toast = this.tst.create({
            message: msj,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    ProfilPage.prototype.Logout = function () {
        this.storage.remove('user');
        this.zone.run(function () {
        });
        this.presentToast('Çıkış Yapıldı.');
    };
    ProfilPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            var username = val.displayName;
            _this.userProfile = val;
        }).catch(function (error) {
            _this.presentToast('Lütfen giriş yapınız');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    return ProfilPage;
}());
ProfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profil',template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\profil\profil.html"*/'<!--\n  Generated template for the ProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n<ion-list>\n    <ion-item *ngFor="let user of kisiler" >\n      <ion-avatar item-start>\n        <img src="vakifbank.logo.jpg">\n      </ion-avatar>\n<br>\n      <h2>{{user.username}}</h2>\n	  <h2>{{user.Email}}}}</h2>\n	   </ion-item>\n	   \n	   \n	\n</ion-list>\n</ion-content>\n\n<!--<ion-content class="login" *ngIf="userProfile; else elseblock;"  padding >\n<img class="logo" src="vakifbank.logo.jpg"/>\nbackground-color:#FDFEFE;\n\n<p padding>\n<img ion-thumbnail  [src]="userProfile.photoURL" >\n\n</p>\n<h3>{{ userProfile.displayName }}</h3>\n\n<p>\n<button ion-button color="white"(click)=\'Logout()\'>Logout</button>\n</p>\n\n\n</ion-content>\n-->\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\profil\profil.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object])
], ProfilPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = (function () {
    function DetailsPage(params) {
        this.params = params;
        this.pushMessage = 'push message will be displayed here';
        if (params.data.message) {
            this.pushMessage = params.data.message;
        }
    }
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Push Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Push Details Page</h2>\n  <p>\n    Clicking push notification should navigate you here\n  </p>\n  <h6>{{pushMessage}}</h6>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\details\details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(516);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_item_details_item_details__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_push__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_cloud_angular__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_kisiler_kisiler__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mesajlar_mesajlar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { ListPage } from '../pages/list/list';










var cloudSettings = {
    'core': {
        'app_id': 'bb41db03'
    },
    'push': {
        'sender_id': '727631075871',
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': '#343434'
            }
        }
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            //  ListPage,
            __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_kisiler_kisiler__["a" /* KisilerPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mesajlar_mesajlar__["a" /* MesajlarPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil__["a" /* ProfilPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            //  ListPage,
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_kisiler_kisiler__["a" /* KisilerPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mesajlar_mesajlar__["a" /* MesajlarPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil__["a" /* ProfilPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_push__["a" /* Push */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ListPage } from '../pages/list/list';





//New push actions



var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, alertCtrl, push, storage) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.push = push;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.initializeApp({
            apiKey: "AIzaSyC4svRY7a30W7j89sNJW2m-7COGrEYRpS4",
            authDomain: "https://uyg2-41a16.firebaseapp.com/",
            databaseURL: "https://uyg2-41a16.firebaseio.com/",
            storageBucket: "gs://uyg2-41a16.appspot.com",
            messagingSenderId: "727631075871"
        });
        this.initializeApp();
        // set our app's pages
        if (this.isLogin() === false) {
            this.pages = [
                { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
                //{ title: 'My First List', component: ListPage },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */] },
                { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */] }
            ];
        }
        else {
            this.pages = [
                { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] }
                //{ title: 'My First List', component: ListPage },
            ];
        }
    }
    MyApp.prototype.isLogin = function () {
        var status = null;
        this.storage.get('user').then(function (val) {
            status = true;
        }).catch(function (error) { status = false; });
        return status;
    };
    MyApp.prototype.Logout = function () {
        this.storage.remove('user');
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {
                senderID: '727631075871'
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log('device token -> ' + data.registrationId);
            //TODO - send device token to server
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message -> ' + data.message);
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                //TODO: Your logic here
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */], { message: data.message });
                            }
                        }]
                });
                confirmAlert.present();
            }
            else {
                //if user NOT using app and push notification comes
                //TODO: Your logic on click of push notification directly
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */], { message: data.message });
                console.log('Push notification clicked');
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.initPushNotification();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n	 \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams, alertController, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.fb = fb;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage.prototype.showAlert = function () {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
        var alert = this.alertController.create({
            title: 'Hi Boris!',
            subTitle: this.selectedItem.title,
            buttons: ['Ok', 'Not OK!']
        });
        alert.present();
    };
    return ItemDetailsPage;
}());
ItemDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n  <button ion-button  (click)=\'showAlert()\'>Show Message</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\item-details\item-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], ItemDetailsPage);

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(167);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, facebook, storage, tst, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.facebook = facebook;
        this.storage = storage;
        this.tst = tst;
        this.loadingCtrl = loadingCtrl;
        this.userProfile = null;
        this.mesaj = "asd";
        this.isLogin();
    }
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.facebook.login(['email']).then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
                _this.storage.set('user', success);
                _this.userProfile = success;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
                //this.presentToast(firebase.auth().currentUser.uid);
                //this.presentToast(firebase.auth().currentUser.uid);
            })
                .catch(function (error) {
                console.log("Firebase failure: " + JSON.stringify(error));
            });
        }).catch(function (error) { console.log(error); });
    };
    LoginPage.prototype.presentToast = function (msj) {
        var toast = this.tst.create({
            message: msj,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype.normalLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Giriş yapılıyor...'
        });
        loading.present().then(function () {
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithEmailAndPassword(_this.email, _this.password).then(function (success) {
                _this.storage.set('user', success);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
            }).catch(function (error) {
                _this.presentToast(error);
            });
            loading.dismiss();
        });
    };
    LoginPage.prototype.isLogin = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
        }).catch(function (error) { });
    };
    LoginPage.prototype.openRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.registerWithEmailAndPassword = function () {
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().createUserWithEmailAndPassword('burakakyol0795@gmail.com', "burak1234").then(function (success) {
        }).catch(function (error) {
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n<ion-header style="background-color:red;">\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n-->\n\n\n<ion-content class="login" >\n<img class="logo"  src="vakifbank.logo.jpg"  />\n\n<ion-list class="login-giris-input" >\n\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input [value]="email" [(ngModel)]="email"type="email"></ion-input>\n  </ion-item>\n\n  <ion-item margin-top>\n    <ion-label>Password</ion-label>\n    <ion-input [value]="password" [(ngModel)]="password" type="password"></ion-input>\n  </ion-item>\n\n</ion-list>\n    \n<div padding   class="butonlar">\n\n<button class="login-button" ion-button (click)=\'normalLogin()\' color="#FDB813" block>GİRİŞ</button>\n<p text-center><b> ya da </b></p>\n<button  class="facebook-button" ion-button (click)="facebookLogin()" block >Facebook ile Giriş</button>\n<p>Henüz hesabınız yok mu? <u><a (click)=\'openRegisterPage()\'>Kayıt olmak için tıklayın</a></u></p>\n</div>\n</ion-content>\n\n<!--\n<ion-content >\n \n   \n	<div padding-horizontal>\n      <button ion-button  (click)="normalLogin()">\n        Log In With Email\n\n        </button>\n\n    <button ion-button  (click)="registerWithEmailAndPassword()">\n      Register With Email\n\n      </button>\n\n      <ion-card *ngIf="userProfile">\n    <img [src]="userProfile.photoURL"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{ userProfile.displayName }}\n      </ion-card-title>\n      <p>\n        The UID for this new user is {{userProfile.uid}} and the email is {{userProfile.email}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n    \n    </div>\n	<div float-left>\n <button ion-button  (click)="facebookLogin()">\n        Log In with Facebook\n\n      </button>\n\n</div>\n</ion-content>\n-->\n'/*ion-inline-end:"C:\Users\HP\Desktop\intern-app-1-master\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[511]);
//# sourceMappingURL=main.js.map