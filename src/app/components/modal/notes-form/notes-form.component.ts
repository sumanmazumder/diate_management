import { Component, OnInit , ViewChild, ElementRef, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { notesInterface } from '../../../interfaces/notesInterface';
import { NotesService } from '../../../services/notes.service';
@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss']
})
export class NotesFormComponent implements OnInit {
  public user: notesInterface = {};
  @ViewChild("notesFrom", {static: true}) notesFrom:ElementRef;
  constructor(
    public dialogRef: MatDialogRef<NotesFormComponent>,
    private notesServices: NotesService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

  ngOnInit() {
    this.data.userId
    console.log(this.data.userId);
  }
  notesSubmit(){
    this.notesServices.notesData(this.getNotesForm()).subscribe(
      (user:any)=>{
        console.log(user);
        this.closeDialog();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  getNotesForm(){
    return new FormData(this.notesFrom.nativeElement);
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
