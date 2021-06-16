import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecificActivityService {
  link = "http://localhost:3000/api/activity/";
  link2 = "http://localhost:3000/api/report/pdf/";
  link3 = "http://localhost:3000/api/report/validate";
  constructor(
    private http: HttpClient
  ) { }
  getActivity(id){
    return this.http.get(this.link+id);
  }
  downloadFile(id){
    return this.http.get(this.link2+id, {responseType: 'blob'});
  }
  validateReport(id){
    return this.http.post(this.link3,{'id':id})
  }
}
