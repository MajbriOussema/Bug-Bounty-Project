import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  api_link1 = 'http://localhost:3000/api/programs/fetchPrograms';
  api_link2 = 'http://localhost:3000/api/programs/checkPassword';
  constructor(
    private http: HttpClient
  ) { }
  fetchPrograms(companyId: string){
    let params = new HttpParams().set('companyId',companyId);
    return this.http.get(this.api_link1,{params: params})
  }
  checkPassword(companyId: string,password: string){
    let params = new HttpParams().set('companyId',companyId);
    params.set('password',password);
    return this.http.get(this.api_link2,{params: params})
  }
}
