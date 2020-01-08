import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  
  constructor(
    private http: HttpClient,
    private apiService: ApiService
    ) { }

  qualificationData(Data: any){
    const url = this.apiService.getUrl("UserQualification");
    console.log(url);
    
    return this.http.post(url, Data);
  }
}
