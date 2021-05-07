import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReghackerService } from './reghacker.service';

@Component({
  selector: 'app-reghacker',
  templateUrl: './reghacker.component.html',
  styleUrls: ['./reghacker.component.css']
})
export class ReghackerComponent implements OnInit {
  serverError: string;
  constructor(
    private reghacker: ReghackerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  triggerError(){
    if(!!this.serverError){
      return true;
    }
    return false;
  }
  registerHacker(formulaire: NgForm): any{
    this.reghacker.register(formulaire.value).subscribe(
      (response: any) => {
        const link = ['login'];
        this.router.navigate(link);
      },
      (error: any) => {
        this.serverError = error.error.message;
      }
    )
  }
}
