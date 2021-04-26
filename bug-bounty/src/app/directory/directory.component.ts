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
  programs : Programs[] = [
    {
      name : "p1",
      reports : 15,
      bounties_min : 100,
      bounties_avg : 250
    },
    {
      name : "p2",
      reports : 1,
      bounties_min : 1000,
      bounties_avg : 2000
    },
    {
      name : "p3",
      reports : 300,
      bounties_min : 5,
      bounties_avg : 10
    }
  ];

  sortedData: Programs[];

  constructor() { 
    this.sortedData = this.programs.slice();
  }
  
  sortData(sort: Sort) {
    const data = this.programs.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'reports': return compare(a.reports, b.reports, isAsc);
        case 'bounties_min': return compare(a.bounties_min, b.bounties_min, isAsc);
        case 'bounties_avg': return compare(a.bounties_avg, b.bounties_avg, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
