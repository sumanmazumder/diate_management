import { Component, OnInit } from '@angular/core';
import { NotesListService } from 'src/app/services/notes-list.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  public notesList :any;
  constructor(private service: NotesListService) { }

  ngOnInit() {
    
    console.log(this.NotesList());
    
  }
  NotesList(){
    this.service.getNotesList().subscribe(
      (res:any)=>{
        console.log(res['data']);
        this.notesList = res['data']
        
      },(error)=>{console.log(error);
      }
    )
  }
}
