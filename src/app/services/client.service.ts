import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  getClientList(){
    const url = this.apiService.getUrl("userClientList");
    return this.http.get(url);
  }
}
