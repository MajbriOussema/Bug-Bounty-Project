import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpecificProgramService {
  id = 6;
  constructor( private http: HttpClient) {}
  getProgramInfo(){
    const api_link = 'http://localhost:3000/api/program/'+this.id;
    return this.http.get(api_link)
  }
  submitReport(data,file:File){
    const api_link = "http://localhost:3000/api/report/submit";
    console.log(file);
    let formData = new FormData();
    formData.append('reportPoc',file);
    formData.append('asset',data.asset);
    return this.http.post(api_link,formData);
  }
}
