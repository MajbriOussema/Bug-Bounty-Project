import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../company/program/program/program.component';

@Component({
  selector: 'app-specific-program',
  templateUrl: './specific-program.component.html',
  styleUrls: ['./specific-program.component.css']
})
export class SpecificProgramComponent implements OnInit {
  prog_name = "Reddit";
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openSubmitDialog(){
    const dialogRef = this.dialog.open(DialogSubmit, {
      width: '900px',
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
})
export class DialogSubmit{
  constructor(
    public dialogRef: MatDialogRef<DialogSubmit>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}