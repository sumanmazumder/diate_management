import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QualificationFormComponent } from '../qualification-form/qualification-form.component';
import { KidsFormComponent } from '../kids-form/kids-form.component';
import { RatesFormComponent } from '../rates-form/rates-form.component';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openQualification(){
    const dialogRef= this.dialog.open(QualificationFormComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
  openKids(){
    const dialogRef= this.dialog.open(KidsFormComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
  openRates(){
    const dialogRef= this.dialog.open(RatesFormComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
  openNotes(){
    const dialogRef= this.dialog.open(NotesComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
}
