import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';

export interface Programs{
  name: string,
  reports : number,
  bounties_min : number,
  bounties_avg : number,
}

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent {
  programs: any = [];
  constructor() { 
    this.programs.push("prog1");
    this.programs.push("prog2");
    this.programs.push("prog3");
    this.programs.push("prog4");
  }
  
  
}

