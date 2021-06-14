import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  api_link = 'http://localhost:3000/api/report/activity';
  constructor(
    private http: HttpClient
  ) { }
  getActivities(){
    return this.http.get(this.api_link);
  }
}
