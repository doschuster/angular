import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        MatSidenavModule
    ],
    exports: [DashboardComponent],
    declarations: [
        DashboardComponent
    ],
    providers: [],
})
export class DashboardModule { }
