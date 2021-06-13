import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { DirectoryService } from './directory.service';

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
  constructor(
    private directoryService: DirectoryService,
  ) { 
  }
  ngOnInit(): void {
    this.directoryService.getDirectoryPrograms().subscribe(
      (response: any) => {
        this.programs = response;
      },
      (error: any) => {
        console.log("server error");
      }
    );
  }
  
}

