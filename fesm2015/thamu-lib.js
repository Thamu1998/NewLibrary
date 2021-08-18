import * as i0 from '@angular/core';
import { Injectable, Component, Input, InjectionToken, NgModule } from '@angular/core';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

class MylibService {
    constructor() { }
    static alertfun(msg) {
        console.log(msg);
    }
}
MylibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MylibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MylibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MylibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MylibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.1", type: MylibComponent, selector: "dev-mylib", ngImport: i0, template: `
    <p>
      mylib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dev-mylib',
                    template: `
    <p>
      mylib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class CustomCardComponent {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    // async alertfun(){
    //   const alert = await this.alertController.create({
    //     header: 'Alert',
    //     subHeader: 'Subtitle',
    //     message: 'This is an alert message.',
    //     buttons: ['OK']
    //   });
    //   await alert.present();
    // }
    calculateDistance(lat1, lat2, long1, long2) {
        console.log(lat1, lat2, long1, long2);
        let p = 0.017453292519943295; // Math.PI / 180
        let c = Math.cos;
        let a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
        let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        this.Kmeter = dis;
        return dis;
    }
}
CustomCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: CustomCardComponent, deps: [{ token: i1.AlertController }], target: i0.ɵɵFactoryTarget.Component });
CustomCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.1", type: CustomCardComponent, selector: "dev-custom-card", inputs: { lat1: "lat1", long1: "long1", lat2: "lat2", long2: "long2" }, ngImport: i0, template: "<ion-content>\n   \n    <div class=\"ion-text-center\">\n        <ion-button (click)=\"calculateDistance(lat1,lat2,long1,long2)\">Calculate</ion-button>\n    </div>\n    <div  >\n        <h3>Distance : {{Kmeter}} Km</h3>\n    </div>\n   \n</ion-content>", styles: [""], components: [{ type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: CustomCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dev-custom-card',
                    templateUrl: './custom-card.component.html',
                    styleUrls: ['./custom-card.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i1.AlertController }]; }, propDecorators: { lat1: [{
                type: Input
            }], long1: [{
                type: Input
            }], lat2: [{
                type: Input
            }], long2: [{
                type: Input
            }] } });

const LibConfigService = new InjectionToken('LibConfig');
class MylibModule {
    static forRoot(config) {
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
    }
}
MylibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MylibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibModule, declarations: [MylibComponent,
        CustomCardComponent], imports: [IonicModule,
        CommonModule,
        HttpClientModule], exports: [MylibComponent,
        CustomCardComponent] });
MylibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibModule, imports: [[
            IonicModule,
            CommonModule,
            HttpClientModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: MylibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MylibComponent,
                        CustomCardComponent
                    ],
                    imports: [
                        IonicModule,
                        CommonModule,
                        HttpClientModule,
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

export { CustomCardComponent, LibConfigService, MylibComponent, MylibModule, MylibService };
//# sourceMappingURL=thamu-lib.js.map
