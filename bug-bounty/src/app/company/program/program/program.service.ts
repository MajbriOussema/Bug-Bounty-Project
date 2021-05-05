import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  api_link1 = 'http://localhost:3000/api/program';
  api_link2 = 'http://localhost:3000/api/programs/checkPassword';
  api_link3 = 'http://localhost:3000/api/program';
  constructor(
    private http: HttpClient
  ) { }
  fetchPrograms(){
    return this.http.get(this.api_link1);
  }
  checkPassword(companyId: string,password: string){
    let params = new HttpParams()
      .set('companyId',companyId)
      .set('password',password);
    return this.http.get<any>(this.api_link2,{params});
  }
  addProgram(form: any){
    form.company = "company1";
    console.log(form);
    return this.http.post(this.api_link3,form);
  }
}
