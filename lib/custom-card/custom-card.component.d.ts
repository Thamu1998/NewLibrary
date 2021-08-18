import { OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class CustomCardComponent implements OnInit {
    alertController: AlertController;
    lat1: any | undefined;
    long1: any | undefined;
    lat2: any | undefined;
    long2: any | undefined;
    Kmeter: any;
    distance: any;
    constructor(alertController: AlertController);
    ngOnInit(): void;
    calculateDistance(lat1: any, lat2: any, long1: any, long2: any): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCardComponent, "dev-custom-card", never, { "lat1": "lat1"; "long1": "long1"; "lat2": "lat2"; "long2": "long2"; }, {}, never, never>;
}
