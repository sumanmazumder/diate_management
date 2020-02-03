import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private apiService: ApiService, private http: HttpClient) { }
  progress(data:any){
    const url = this.apiService.getUrl("UserProgress");
    return this.http.post(url, data);
  }
}
