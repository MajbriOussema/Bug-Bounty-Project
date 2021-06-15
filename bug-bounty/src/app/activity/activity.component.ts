import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from './activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) { }
  activities = [];
  ngOnInit(): void {
    this.activityService.getActivities().subscribe(
      (response:any) => {
        console.log(response);
        this.activities = response;
      },
      (error) => console.log(error)
    );
  }
viewActivity(id){
  const link = ['/activity/'+id];
  this.router.navigate(link);
}
}
