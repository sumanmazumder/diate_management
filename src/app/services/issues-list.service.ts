import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssuesListService {

  constructor(private apiService: ApiService, private http: HttpClient) { }
  getIssueList(){
    const url = this.apiService.getUrl("UserIssue");
    return this.http.get(url);
  }
}
