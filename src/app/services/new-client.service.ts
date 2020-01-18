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
  public updateClient(UserDetail:any,userId){
    const url = this.apiService.getUrl(`UserDetail/${userId}`);
    UserDetail._method = 'PUT';
    return this.http.post(url, UserDetail);
  }
  getUserData(userId:any){
    const url = this.apiService.getUrl(`userById/${userId}`);
    // console.log(url);
    // console.log(userId);
    return this.http.get(url);
  }
}
