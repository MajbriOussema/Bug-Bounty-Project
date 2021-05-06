import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReghackerService {
  api_link = 'http://localhost:3000/api/auth/register/hacker';
  constructor(
    private http: HttpClient
  ) { }
  register(informations: any){
    return this.http.post(this.api_link,{
      'username': informations.username,
      'email': informations.email,
      'password': informations.password,
      'country': informations.country
    });
  }
}
