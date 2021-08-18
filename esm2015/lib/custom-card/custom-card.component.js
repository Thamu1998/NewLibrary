import { Input } from '@angular/core';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class CustomCardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXlsaWIvc3JjL2xpYi9jdXN0b20tY2FyZC9jdXN0b20tY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teWxpYi9zcmMvbGliL2N1c3RvbS1jYXJkL2N1c3RvbS1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBU2xELE1BQU0sT0FBTyxtQkFBbUI7SUFPOUIsWUFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUksQ0FBQztJQUV4RCxRQUFRO0lBQ1IsQ0FBQztJQUNELG9CQUFvQjtJQUNwQixzREFBc0Q7SUFDdEQsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3Qiw0Q0FBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLFFBQVE7SUFFUiwyQkFBMkI7SUFDM0IsSUFBSTtJQUVKLGlCQUFpQixDQUFDLElBQVEsRUFBQyxJQUFRLEVBQUMsS0FBUyxFQUFDLEtBQVM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFJLGdCQUFnQjtRQUNqRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDO1FBQ2hCLE9BQU8sR0FBRyxDQUFDO0lBRWIsQ0FBQzs7Z0hBL0JVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLCtIQ1ZoQywrUEFTYzsyRkRDRCxtQkFBbUI7a0JBTC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzNDO3NHQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rldi1jdXN0b20tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21DYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGF0MTogYW55IHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBsb25nMTogYW55IHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBsYXQyOiBhbnkgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGxvbmcyOiBhbnkgfCB1bmRlZmluZWQ7XG4gIEttZXRlcjogYW55O1xuICBkaXN0YW5jZTogYW55O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG4gIC8vIGFzeW5jIGFsZXJ0ZnVuKCl7XG4gIC8vICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAvLyAgICAgaGVhZGVyOiAnQWxlcnQnLFxuICAvLyAgICAgc3ViSGVhZGVyOiAnU3VidGl0bGUnLFxuICAvLyAgICAgbWVzc2FnZTogJ1RoaXMgaXMgYW4gYWxlcnQgbWVzc2FnZS4nLFxuICAvLyAgICAgYnV0dG9uczogWydPSyddXG4gIC8vICAgfSk7XG5cbiAgLy8gICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIC8vIH1cblxuICBjYWxjdWxhdGVEaXN0YW5jZShsYXQxOmFueSxsYXQyOmFueSxsb25nMTphbnksbG9uZzI6YW55KXtcbiAgICBjb25zb2xlLmxvZyhsYXQxICxsYXQyICwgbG9uZzEsbG9uZzIpO1xuICAgIGxldCBwID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7ICAgIC8vIE1hdGguUEkgLyAxODBcbiAgICBsZXQgYyA9IE1hdGguY29zO1xuICAgIGxldCBhID0gMC41IC0gYygobGF0MS1sYXQyKSAqIHApIC8gMiArIGMobGF0MiAqIHApICpjKChsYXQxKSAqIHApICogKDEgLSBjKCgobG9uZzEtIGxvbmcyKSAqIHApKSkgLyAyO1xuICAgIGxldCBkaXMgPSAoMTI3NDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KGEpKSk7IC8vIDIgKiBSOyBSID0gNjM3MSBrbVxuICAgIHRoaXMuS21ldGVyPWRpcztcbiAgICByZXR1cm4gZGlzO1xuICAgXG4gIH1cbn1cbiIsIjxpb24tY29udGVudD5cbiAgIFxuICAgIDxkaXYgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNhbGN1bGF0ZURpc3RhbmNlKGxhdDEsbGF0Mixsb25nMSxsb25nMilcIj5DYWxjdWxhdGU8L2lvbi1idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAgPlxuICAgICAgICA8aDM+RGlzdGFuY2UgOiB7e0ttZXRlcn19IEttPC9oMz5cbiAgICA8L2Rpdj5cbiAgIFxuPC9pb24tY29udGVudD4iXX0=