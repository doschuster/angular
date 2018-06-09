import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarContentComponent } from './navbar-content.component';

@NgModule({
    imports: [CommonModule],
    exports: [NavbarContentComponent],
    declarations: [NavbarContentComponent],
    providers: [],
    bootstrap: []
})
export class NavbarContentModule { }
