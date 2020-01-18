import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TasksListService {

  constructor(private apiService: ApiService, private http: HttpClient) { }
  getTaskList(){
    const url = this.apiService.getUrl("UserTask");
    return this.http.get(url);
  }
}
