import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  api_link1 = 'http://localhost:3000/api/program';
  api_link2 = 'http://localhost:3000/api/auth/checkPassword';
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
    return this.http.post(this.api_link2,{companyId:companyId,password:password});
  }
  addProgram(form: any){
    const inscopevalues = this.getArray(form,"inScope");
    const outofscopevalues = this.getArray(form,"outOfScope");
    const severityvalues = this.getArray(form,"severity");
    console.log(inscopevalues)
    return this.http.post(this.api_link1,{
      name:form.name,
      policy:form.policy,
      company:'company',
      inScope:inscopevalues,
      outOfScope:outofscopevalues,
      severity:severityvalues
    });
  }
  updateProgram(id : string,form : any) {
    const inscopevalues = this.getArray(form, "inScope");
    const outofscopevalues = this.getArray(form, "outOfScope");
    const severityvalues = this.getArray(form, "severity");
    const link = this.api_link1+'/'+id;
    return(this.http.put(link, {
      name: form.name,
      policy: form.policy,
      inScope: inscopevalues,
      outOfScope: outofscopevalues,
      severity: severityvalues
    }));
  }

  deleteProgram(id :any){
    return this.http.delete(id);
  }
}
