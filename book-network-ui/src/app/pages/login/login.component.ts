import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {FormsModule} from "@angular/forms";
import { Router } from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email:'' ,password:''}
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {
  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next:(res)=>{

        this.router.navigate(['books']);
      },
      error :(err)=>{
        console.log(err);
      }
    })
  }
  register(){
  this.router.navigate(['register'])
  }

}
