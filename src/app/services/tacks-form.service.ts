import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TacksFormService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }

  tacksForm(data:any){
    let url = this.apiService.getUrl("UserTacks");
    return this.http.post(url, data);
  }
}
