import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegcompanyService {
  api_link = 'http://localhost:3000/api/registre/company';
  constructor(
    private http: HttpClient
  ) { }
  register(informations){
    return this.http.post(this.api_link,informations);
  }

}
