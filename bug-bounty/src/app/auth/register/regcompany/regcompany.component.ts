import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegcompanyService } from './regcompany.service';

@Component({
  selector: 'app-regcompany',
  templateUrl: './regcompany.component.html',
  styleUrls: ['./regcompany.component.css']
})
export class RegcompanyComponent implements OnInit {

  constructor(
    private regcompany: RegcompanyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  registerCompany(formulaire: NgForm): any {
    this.regcompany.register(formulaire.value).subscribe(
      (response: any) => {
        const link = ['login'];
        this.router.navigate(link);
      },
      (error: any) => {

      }
    )
  }

}
