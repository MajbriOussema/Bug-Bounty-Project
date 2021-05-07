import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_link = 'http://localhost:3000/api/auth/login';
  api_link2 = 'http://localhost:3000/api/auth/check';
  constructor(
    private http: HttpClient,
  ) { }
  login(informations: any){
    return this.http.post(this.api_link,informations);
  }
  logout(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    console.log("A");
    this.http.get(this.api_link2);
    return !! localStorage.getItem('token');
  }
}
