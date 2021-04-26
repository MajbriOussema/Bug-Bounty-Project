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
  private _username: string;
  constructor(
    private reghacker: ReghackerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  username(): string{
    return this._username;
  }
  registerHacker(formulaire: NgForm): any{
    this.reghacker.register(formulaire.value).subscribe(
      (response: any) => {
        localStorage.setItem('token','hacker');
        const link = [''];
        this.router.navigate(link);
      },
      (error: any) => {
        localStorage.setItem('token','hacker');
        const link = ['error'];
        this.router.navigate(link);
      }
    )
  }
}
