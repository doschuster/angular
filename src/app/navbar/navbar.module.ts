import { NgModule } from '@angular/core';

import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
})
export class NavbarModule { }
