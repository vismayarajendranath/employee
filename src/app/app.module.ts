import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
