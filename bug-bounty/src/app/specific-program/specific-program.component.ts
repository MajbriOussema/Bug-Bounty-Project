import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../company/program/program/program.component';
import {ActivatedRoute} from "@angular/router";
import {SpecificProgramService} from "./specific-program.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-specific-program',
  templateUrl: './specific-program.component.html',
  styleUrls: ['./specific-program.component.css']
})
export class SpecificProgramComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private activatedRoute : ActivatedRoute,
    private SpecificProgramService : SpecificProgramService
  ) {}
  program :any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.SpecificProgramService.id = params["id"];
      }
    )
    this.SpecificProgramService.getProgramInfo().subscribe(
      (response:any)=>{
        this.program = response;
      },
      (error:any)=>{
        console.log("error")
      }
    );
  }


  openSubmitDialog(){
    const dialogRef = this.dialog.open(DialogSubmit, {
      width: '700px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector:'dialog-submit',
  templateUrl: './dialog/dialog-submit.html',
  styleUrls: ['./dialog/dialog-submit.css']
})
export class DialogSubmit{
  serverError: string;
  private fileToUpload: File;
  constructor(
    public dialogRef: MatDialogRef<DialogSubmit>,
    private specificProgramService: SpecificProgramService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  program : any;
  ngOnInit() : void {
    this.specificProgramService.getProgramInfo().subscribe(
      (response) => {
        this.program = response;
      },
    (error) => {
        console.log("error");
    }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload.name);
  }
  triggerError(){
    if(!!this.serverError){
      return true;
    }
    return false;
  }
  submitReport(form: NgForm){
    if(this.fileToUpload.type === "application/pdf"){
      this.specificProgramService.submitReport(form.value,this.fileToUpload).subscribe(
        (response: any) => {
          this.dialogRef.close();
        },
        (error: any) => {
          this.serverError = error.error.message;
        }
      );
    }
    else {
      this.serverError = "report must be uploaded as PDF";
    }
  }
}
