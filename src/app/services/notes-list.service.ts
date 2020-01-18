import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesListService {

  constructor(private apiService: ApiService, private http: HttpClient) { }
  getNotesList(){
    const url = this.apiService.getUrl("UserNote");
    return this.http.get(url);
  }
}
