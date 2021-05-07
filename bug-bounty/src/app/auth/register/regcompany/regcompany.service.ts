import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegcompanyService {
  api_link = 'http://localhost:3000/api/auth/register/company';
  constructor(
    private http: HttpClient
  ) { }
  register(informations){
    delete informations.cpassword;
    return this.http.post(this.api_link,informations);
  }

}
