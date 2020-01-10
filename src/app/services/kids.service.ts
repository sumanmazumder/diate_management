import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class KidsService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }
  kidsData(Data:any){
    const url = this.apiService.getUrl("UserKid");
    return this.http.post(url, Data);
  }
}
