import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DietitionsListService {

  constructor(private apiService: ApiService, private http: HttpClient) { }
  getdietitionsList(){
    const url = this.apiService.getUrl("userDietList");
    return this.http.get(url);
  }
}
