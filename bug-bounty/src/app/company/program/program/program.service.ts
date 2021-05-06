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
    const inscope = Object.keys(form).filter((item) => item.startsWith("inScope"));
   // const inscope = Object.keys(form).filter((item) => item.startsWith("inScope"));
    const inscopevalues = [];
    for (let val of inscope){
      inscopevalues.push(form[val]);
    }
    return this.http.post(this.api_link3,{name:form.name,policy:form.policy,company:'company',inScope:inscopevalues});
  }
}
