import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    public lgService: LoginService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.lgService.logout();
  }
}
