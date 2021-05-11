import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpecificProgramService {
  
  id = 6;
  constructor( 
    private http: HttpClient,
    private router: Router
  ) {}
  getProgramInfo(){
    const api_link = 'http://localhost:3000/api/program/'+this.id;
    return this.http.get(api_link)
  }
  submitReport(data,file:File){
    const api_link = "http://localhost:3000/api/report/submit";
    const programId = this.router.url.split("/")[2];
    let formData = new FormData();
    formData.append('reportPoc',file);
    formData.append('asset',data.asset);
    formData.append('weakness',data.weakness);
    formData.append('severity',data.severity);
    formData.append('id',programId);
    return this.http.post(api_link,formData);
  }
}
