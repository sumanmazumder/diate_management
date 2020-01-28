import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DietChatService {

  constructor(private apiService: ApiService, private http: HttpClient) { }
  getDietChat(data:any){
    const url = this.apiService.getUrl("diet/store");
    return this.http.post(url, data);
  }
}
