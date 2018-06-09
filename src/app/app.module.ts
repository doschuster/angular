import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

import { NavbarContentModule } from './components/navbar-content/navbar-content.module';

import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    NavbarContentModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
