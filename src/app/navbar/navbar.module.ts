import { NgModule } from '@angular/core';

import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from '../app-routing-module';

import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        AppRoutingModule
],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
})
export class NavbarModule { }
