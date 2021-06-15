import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecificActivityService {
  link = "http://localhost:3000/api/activity/";
  constructor(
    private http: HttpClient
  ) { }
  getActivity(id){
    return this.http.get(this.link+id);
  }
}
