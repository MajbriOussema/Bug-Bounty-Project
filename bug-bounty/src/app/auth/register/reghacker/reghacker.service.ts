import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReghackerService {
  api_link = 'http://localhost:3000/api/registre/hacker';
  constructor(
    private http: HttpClient
  ) { }
  register(informations: any){
    return this.http.post(this.api_link,informations);
  }
}
