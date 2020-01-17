import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }
  issueFromData(data:any){
    const url = this.apiService.getUrl("UserIssue");
    return this.http.post(url, data);
  }
}
