import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_link = 'http://localhost:3000/api/login';
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
    return (!! localStorage.getItem('token'));
  }
}
