import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacktivity',
  templateUrl: './hacktivity.component.html',
  styleUrls: ['./hacktivity.component.css']
})
export class HacktivityComponent implements OnInit {
  hacktivities: any = [];
  constructor() { }

  ngOnInit(): void {
    this.hacktivities.push("AAA");
    this.hacktivities.push("AAA");
    this.hacktivities.push("AAA");
    this.hacktivities.push("AAA");

    this.hacktivities.push("AAA");
    this.hacktivities.push("AAA");

  }

}
