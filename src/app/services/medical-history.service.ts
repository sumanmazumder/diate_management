import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  medicalHistory(data:any){
    const url = this.apiService.getUrl("UserMedHistory");
    return this.http.post(url, data);
  }
  medicalHistoryDelete(id:number){
    const url = this.apiService.getUrl(`UserMedHistory/${id}`);
    return this.http.delete(url);
  }

  medicalHistoryUpdate(id:number, data:any){
    data._method="PUT";
    const url = this.apiService.getUrl(`UserMedHistory/${id}`);
    return this.http.post(url, data);
  }
}
