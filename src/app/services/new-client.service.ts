import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewClientService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  public addClient(UserDetail: any){
    const url = this.apiService.getUrl("register");
    // console.log(url);
    return this.http.post(url, UserDetail);
  }
}
