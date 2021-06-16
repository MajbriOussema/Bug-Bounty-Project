import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/auth/login/login.service';
import { SpecificActivityService } from './specific-activity.service';

@Component({
  selector: 'app-specific-activity',
  templateUrl: './specific-activity.component.html',
  styleUrls: ['./specific-activity.component.css']
})
export class SpecificActivityComponent implements OnInit {
  id: any;
  infos: any;
  valid:any;
  constructor(
    private specificService: SpecificActivityService,
    private activatedRoute: ActivatedRoute,
    private authService: LoginService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params["id"];
      }
    )
    this.specificService.getActivity(this.id).subscribe(
      (response) => this.infos = response,
      (error) => console.log(error)
    );
  }
  downloadReport(){
    this.specificService.downloadFile(this.id).subscribe(
      (response:any) => {
        console.log(response);
        window.open(window.URL.createObjectURL(response));
      },
      (error) => console.log(error)
    );
  }
  checkValidate(){
    if((this.infos.type==="report submit")&&(this.authService.getRole()==="company")&&(this.infos.status=="pending")){
      return true;
    }
    else {
      return false;
    }
  }
  validateReport(){
    this.specificService.validateReport(this.id).subscribe(
      (response:any) => {
        this.valid = "validated";
      },
      (error) => console.log(error)
    );
  }

}
