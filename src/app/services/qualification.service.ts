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
    // console.log(url);
    return this.http.post(url, Data);
  }
  getqualification(){
    const url = this.apiService.getUrl("UserQualification");
    // console.log(url);
    return this.http.get(url);
  }

  // deleteQualification(UserQualification:any, userId){
  //   const url = this.apiService.getUrl(`UserQualification/${userId}`);
  //   UserQualification._method= 'DELETE';
  //   return this.http.post(url, userId);
  // }

  deleteQualification(UserQualification:any, userId){
    const url = this.apiService.getUrl(`UserQualification/${userId}`);
    UserQualification._method= 'DELETE';
    return this.http.get(url);
  }
}
