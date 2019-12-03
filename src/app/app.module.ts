import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { LoginComponent } from './comps/login/login.component';
import { BreslevComponent } from './comps/chassidim/breslev/breslev.component';
import { StolinComponent } from './comps/chassidim/stolin/stolin.component';
import { SlonimComponent } from './comps/chassidim/slonim/slonim.component';
import { AmshinovComponent } from './comps/chassidim/amshinov/amshinov.component';
import { ChassidimMenuComponent } from './comps/chassidim/chassidim-menu/chassidim-menu.component';
import { CalcAgePipePipe } from './pipes/calc-age-pipe.pipe';
import { PipeExampleComponent } from './comps/pipe-example/pipe-example.component';
import { HighlightDirective } from './comps/highlight.directive';
import { ReactiveFormsComponent } from './comps/reactive-forms/reactive-forms.component';
import { ContactUsFormComponent } from './comps/contact-us-form/contact-us-form.component';
import { ContactUsTableComponent } from './comps/contact-us-table/contact-us-table.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { PracticePipesComponent } from './comps/practice-pipes/practice-pipes.component';
import { CapitalPipe } from './pipes/capital.pipe';
import { ToIsraeliDatePipe } from './pipes/to-israeli-date.pipe';
import {MatModule} from './module/material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IceCreamComponent,
    ChocolateComponent,
    DataTitleComponent,
    JsonAppUserComponent,
    LoginComponent,
    BreslevComponent,
    StolinComponent,
    SlonimComponent,
    AmshinovComponent,
    ChassidimMenuComponent,
    CalcAgePipePipe,
    PipeExampleComponent,
    HighlightDirective,
    ReactiveFormsComponent,
    ContactUsFormComponent,
    ContactUsTableComponent,
    MultiplyPipe,
    PracticePipesComponent,
    CapitalPipe,
    ToIsraeliDatePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
