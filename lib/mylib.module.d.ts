import { InjectionToken } from '@angular/core';
import { MylibService } from './mylib.service';
import * as i0 from "@angular/core";
import * as i1 from "./mylib.component";
import * as i2 from "./custom-card/custom-card.component";
import * as i3 from "@ionic/angular";
import * as i4 from "@angular/common";
import * as i5 from "@angular/common/http";
export interface LibConfig {
    apiUrl: string;
}
export declare const LibConfigService: InjectionToken<LibConfig>;
export declare class MylibModule {
    static forRoot(config: LibConfig): {
        ngModule: typeof MylibModule;
        providers: (typeof MylibService | {
            provide: InjectionToken<LibConfig>;
            useValue: LibConfig;
        })[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MylibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MylibModule, [typeof i1.MylibComponent, typeof i2.CustomCardComponent], [typeof i3.IonicModule, typeof i4.CommonModule, typeof i5.HttpClientModule], [typeof i1.MylibComponent, typeof i2.CustomCardComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MylibModule>;
}
