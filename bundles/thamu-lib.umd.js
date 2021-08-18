(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('thamu-lib', ['exports', '@angular/core', '@ionic/angular', '@angular/common', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['thamu-lib'] = {}, global.ng.core, global.i1, global.ng.common, global.ng.common.http));
}(this, (function (exports, i0, i1, common, http) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var MylibService = /** @class */ (function () {
        function MylibService() {
        }
        MylibService.alertfun = function (msg) {
            console.log(msg);
        };
        return MylibService;
    }());
    MylibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MylibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MylibComponent = /** @class */ (function () {
        function MylibComponent() {
        }
        MylibComponent.prototype.ngOnInit = function () {
        };
        return MylibComponent;
    }());
    MylibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MylibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.1", type: MylibComponent, selector: "dev-mylib", ngImport: i0__namespace, template: "\n    <p>\n      mylib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dev-mylib',
                        template: "\n    <p>\n      mylib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var CustomCardComponent = /** @class */ (function () {
        function CustomCardComponent(alertController) {
            this.alertController = alertController;
        }
        CustomCardComponent.prototype.ngOnInit = function () {
        };
        // async alertfun(){
        //   const alert = await this.alertController.create({
        //     header: 'Alert',
        //     subHeader: 'Subtitle',
        //     message: 'This is an alert message.',
        //     buttons: ['OK']
        //   });
        //   await alert.present();
        // }
        CustomCardComponent.prototype.calculateDistance = function (lat1, lat2, long1, long2) {
            console.log(lat1, lat2, long1, long2);
            var p = 0.017453292519943295; // Math.PI / 180
            var c = Math.cos;
            var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
            var dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
            this.Kmeter = dis;
            return dis;
        };
        return CustomCardComponent;
    }());
    CustomCardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: CustomCardComponent, deps: [{ token: i1__namespace.AlertController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CustomCardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.1", type: CustomCardComponent, selector: "dev-custom-card", inputs: { lat1: "lat1", long1: "long1", lat2: "lat2", long2: "long2" }, ngImport: i0__namespace, template: "<ion-content>\n   \n    <div class=\"ion-text-center\">\n        <ion-button (click)=\"calculateDistance(lat1,lat2,long1,long2)\">Calculate</ion-button>\n    </div>\n    <div  >\n        <h3>Distance : {{Kmeter}} Km</h3>\n    </div>\n   \n</ion-content>", styles: [""], components: [{ type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: CustomCardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dev-custom-card',
                        templateUrl: './custom-card.component.html',
                        styleUrls: ['./custom-card.component.css']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.AlertController }]; }, propDecorators: { lat1: [{
                    type: i0.Input
                }], long1: [{
                    type: i0.Input
                }], lat2: [{
                    type: i0.Input
                }], long2: [{
                    type: i0.Input
                }] } });

    var LibConfigService = new i0.InjectionToken('LibConfig');
    var MylibModule = /** @class */ (function () {
        function MylibModule() {
        }
        MylibModule.forRoot = function (config) {
            return {
                ngModule: MylibModule,
                providers: [
                    MylibService,
                    {
                        provide: LibConfigService,
                        useValue: config
                    }
                ]
            };
        };
        return MylibModule;
    }());
    MylibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MylibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibModule, declarations: [MylibComponent,
            CustomCardComponent], imports: [i1.IonicModule,
            common.CommonModule,
            http.HttpClientModule], exports: [MylibComponent,
            CustomCardComponent] });
    MylibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibModule, imports: [[
                i1.IonicModule,
                common.CommonModule,
                http.HttpClientModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: MylibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MylibComponent,
                            CustomCardComponent
                        ],
                        imports: [
                            i1.IonicModule,
                            common.CommonModule,
                            http.HttpClientModule,
                        ],
                        exports: [
                            MylibComponent,
                            CustomCardComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of mylib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CustomCardComponent = CustomCardComponent;
    exports.LibConfigService = LibConfigService;
    exports.MylibComponent = MylibComponent;
    exports.MylibModule = MylibModule;
    exports.MylibService = MylibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=thamu-lib.umd.js.map
