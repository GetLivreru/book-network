import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from "./pages/login/login.component";
import {CodeInputModule} from 'angular-code-input';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CodeInputModule,
    CommonModule,
    LoginComponent
  ],
  providers: [
    HttpClient,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
