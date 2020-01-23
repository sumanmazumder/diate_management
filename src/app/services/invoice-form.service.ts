import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InvoiceFormService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }
  invoicesForm(data:any){
    let url = this.apiService.getUrl("UserInvoice");
    return this.http.post(url, data);
  }
}
