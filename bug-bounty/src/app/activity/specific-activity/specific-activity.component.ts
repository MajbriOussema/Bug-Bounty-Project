import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecificActivityService } from './specific-activity.service';

@Component({
  selector: 'app-specific-activity',
  templateUrl: './specific-activity.component.html',
  styleUrls: ['./specific-activity.component.css']
})
export class SpecificActivityComponent implements OnInit {
  id: any;
  infos: any;
  constructor(
    private specificService: SpecificActivityService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params["id"];
      }
    )
    this.specificService.getActivity(this.id).subscribe(
      (response) => this.infos = response,
      (error) => console.log(error)
    );
  }

}
