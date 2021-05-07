import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  serverError: string;
  constructor(
    private logIn: LoginService,
    private router: Router,
  ) { 
  }
  triggerError(){
    if(!!this.serverError){
      return true;
    }
    return false;
  }
  ngOnInit(): void {
  }
  doLogin(formulaire: NgForm): any{
    this.logIn.login(formulaire.value).subscribe(
      (response: any) => {
        localStorage.setItem('token',response.token);
        const link = [''];
        this.router.navigate(link);
      },
      (error: any) => {
        this.serverError = error.error.message;
      }
    )
  }
}
