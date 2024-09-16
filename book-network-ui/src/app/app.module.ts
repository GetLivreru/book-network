import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from "./pages/login/login.component";
import {CodeInputModule} from 'angular-code-input';
import {RegisterComponent} from "./pages/register/register.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CodeInputModule,
  ],
  providers: [
    HttpClient,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
