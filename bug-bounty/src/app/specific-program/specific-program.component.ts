import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-program',
  templateUrl: './specific-program.component.html',
  styleUrls: ['./specific-program.component.css']
})
export class SpecificProgramComponent implements OnInit {
  prog_name = "Twitter";
  constructor() { }

  ngOnInit(): void {
  }

}
