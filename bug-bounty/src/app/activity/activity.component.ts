import { Component, OnInit } from '@angular/core';
import { ActivityService } from './activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(
    private activityService: ActivityService
  ) { }
  activities = [];
  ngOnInit(): void {
    this.activityService.getActivities().subscribe(
      (response:any) => console.log(response),
      (error) => console.log(error)
    );
  }

}
