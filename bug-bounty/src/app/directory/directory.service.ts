import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  api_link = "http://localhost:3000/api/program/directory"
  constructor(
    private http: HttpClient
  ) { }
  getDirectoryPrograms(){
    return this.http.get(this.api_link);
  }
}
