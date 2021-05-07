import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  api_link1 = 'http://localhost:3000/api/program';
  api_link2 = 'http://localhost:3000/api/programs/checkPassword';
  constructor(
    private http: HttpClient
  ) { }
  getArray(form:any,startwith:string){
    const tmp1 = Object.keys(form).filter((item) => item.startsWith(startwith));
    const tmp2 = [];
    for (let val of tmp1){
      tmp2.push(form[val]);
    }
    return(tmp2);
  }
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
    const inscopevalues = this.getArray(form,"inScope");
    const outofscopevalues = this.getArray(form,"outOfScope");
    const severityvalues = this.getArray(form,"severity");

    return this.http.post(this.api_link1,{
      name:form.name,
      policy:form.policy,
      company:'company',
      inScope:inscopevalues,
      outOfScope:outofscopevalues,
      severity:severityvalues
    });
  }
  updateProgram(id,form : any) {
    const inscopevalues = this.getArray(form, "inScope");
    const outofscopevalues = this.getArray(form, "outOfScope");
    const severityvalues = this.getArray(form, "severity");
    const link = this.api_link1+'/'+id;
    return this.http.post(this.api_link1, {
      name: form.name,
      policy: form.policy,
      company: 'company',
      inScope: inscopevalues,
      outOfScope: outofscopevalues,
      severity: severityvalues
    });
  }
}
