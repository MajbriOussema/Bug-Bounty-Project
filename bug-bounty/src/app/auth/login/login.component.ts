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

  constructor(
    private logIn: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  doLogin(formulaire: NgForm): any{
    this.logIn.login(formulaire.value).subscribe(
      (response: any) => {
        localStorage.setItem('token','lhacker');
        const link = [''];
        this.router.navigate(link);
      },
      (error: any) => {
        localStorage.setItem('token','lhacker');
        const link = ['error'];
        this.router.navigate(link);
      }
    )
  }
}
