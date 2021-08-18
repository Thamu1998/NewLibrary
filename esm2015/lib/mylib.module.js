import { NgModule, InjectionToken } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { IonicModule } from '@ionic/angular';
import { MylibService } from './mylib.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
export const LibConfigService = new InjectionToken('LibConfig');
export class MylibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbXlsaWIvc3JjL2xpYi9teWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUE7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU14RCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBWSxXQUFXLENBQUMsQ0FBQztBQWlCM0UsTUFBTSxPQUFPLFdBQVc7SUFFdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFpQjtRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULFlBQVk7Z0JBQ1o7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0wsQ0FBQzs7d0dBYlcsV0FBVzt5R0FBWCxXQUFXLGlCQWJwQixjQUFjO1FBQ2QsbUJBQW1CLGFBR25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCLGFBR2hCLGNBQWM7UUFDZCxtQkFBbUI7eUdBR1YsV0FBVyxZQVZiO1lBQ1AsV0FBVztZQUNYLFlBQVk7WUFDWixnQkFBZ0I7U0FDakI7MkZBTVUsV0FBVztrQkFmdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxtQkFBbUI7cUJBQ3BCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeWxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXlsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbUNhcmRDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS1jYXJkL2N1c3RvbS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7TXlsaWJTZXJ2aWNlfSBmcm9tICcuL215bGliLnNlcnZpY2UnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBMaWJDb25maWcge1xuICBhcGlVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IExpYkNvbmZpZ1NlcnZpY2UgPSBuZXcgSW5qZWN0aW9uVG9rZW48TGliQ29uZmlnPignTGliQ29uZmlnJyk7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE15bGliQ29tcG9uZW50LFxuICAgIEN1c3RvbUNhcmRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIElvbmljTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTXlsaWJDb21wb25lbnQsXG4gICAgQ3VzdG9tQ2FyZENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IExpYkNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTXlsaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTXlsaWJTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTGliQ29uZmlnU2VydmljZSxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuIH1cbn1cbiJdfQ==