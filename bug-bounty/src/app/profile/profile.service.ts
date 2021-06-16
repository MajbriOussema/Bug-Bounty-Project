import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class profileService {
  constructor(
    private http: HttpClient
  ){}
  link = "http://localhost:3000/api/auth/user"
  getUserInfo(){
    return this.http.get(this.link);
  }
  updateInfo(data){
    return this.http.put(this.link,data)
  }
}
