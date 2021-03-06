import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  notesData(Data:any){
    const url = this.apiService.getUrl("UserNote");
    return this.http.post(url, Data);
  }

  // modal notes services
  noteFromData(data:any){
    const url = this.apiService.getUrl("UserNote");
    return this.http.post(url, data);
  }
}
