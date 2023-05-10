import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutloginComponent } from './layouts/layoutlogin/layoutlogin.component';
import { LayoutappComponent } from './layouts/layoutapp/layoutapp.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LayoutloginComponent,
    LayoutappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
