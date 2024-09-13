import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest
}
