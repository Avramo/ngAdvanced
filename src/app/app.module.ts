import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamComponent,
    ChocolateComponent,
    DataTitleComponent,
    JsonAppUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
