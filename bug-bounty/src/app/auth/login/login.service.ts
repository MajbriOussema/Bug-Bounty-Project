import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_link = 'http://localhost:3000/api/auth/login';
  jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }
  login(informations: any){
    return this.http.post(this.api_link,informations);
  }
  logout(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    const token = localStorage.getItem('token');
    if(!!token){
      try{
        const state = !this.jwtHelper.isTokenExpired(token);
        return state;
      }
      catch (e){
        this.logout();
      }
    }
    return false;
    
  }
}
