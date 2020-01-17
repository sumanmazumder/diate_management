import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { notesInterface } from '../../../interfaces/notesInterface';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @ViewChild("noteForm", {static:true}) noteForm:ElementRef;
  public user: notesInterface = {};
  constructor(
    private noteServices:NotesService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<NotesComponent>
  ) { }

  ngOnInit() {
  }
  noteFromData(){
    this.noteServices.noteFromData(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.close();
      },(error)=>{
        console.log(error);
      }
    )
  }
  getFromData(){
    return new FormData(this.noteForm.nativeElement)
  }
  close(){
    this.dialogRef.close();
  }
}
