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
  getNotesData(){
    const url = this.apiService.getUrl("UserNote");
    return this.http.get(url);
  }
}
