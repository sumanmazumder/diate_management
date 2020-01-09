import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }
  ratesData(Data:any){
    const url = this.apiService.getUrl("UserRate");
    return this.http.post(url, Data);
  }
  getRatesData(){
    const url = this.apiService.getUrl("UserRate");
    return this.http.get(url);
  }
}
