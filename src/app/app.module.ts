import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarContentModule } from './components/navbar-content/navbar-content.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarContentModule,
    DashboardModule,
    NavbarModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
