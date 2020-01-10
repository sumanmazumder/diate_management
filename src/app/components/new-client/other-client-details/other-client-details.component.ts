import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QualificationFormComponent } from '../../qualification-form/qualification-form.component';
import { KidsFormComponent } from '../../kids-form/kids-form.component';
import { RatesFormComponent } from '../../rates-form/rates-form.component';
import { NotesFormComponent } from '../../notes-form/notes-form.component';
import { NewClientService } from '../../../services/new-client.service';
import { newClientInterface } from '../../../interfaces/newClientInterface';

import { QualificationService } from 'src/app/services/qualification.service';
import { KidsService } from '../../../services/kids.service';
import { NotesService } from '../../../services/notes.service';
import { RatesService } from '../../../services/rates.service';
@Component({
  selector: 'app-other-client-details',
  templateUrl: './other-client-details.component.html',
  styleUrls: ['./other-client-details.component.scss']
})
export class OtherClientDetailsComponent implements OnInit {
  @Input("userId") userId:number;

  constructor(
    public dialog: MatDialog, 
    private newservice: NewClientService,
    private qualificationService: QualificationService,
    private kidsService: KidsService,
    private notesService: NotesService,
    private ratesService : RatesService
  ) { }

  ngOnInit() {
  }

  openQualification(){
    const dialogRef= this.dialog.open(QualificationFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.qualificationService.getqualification().subscribe(
        (success:any)=>{
          console.log(success);
        }
      )
    })
  }
  openKids(){
    console.log(this.userId);
    
    const dialogRef= this.dialog.open(KidsFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.kidsService.getUserKids().subscribe(
        (success:any)=>{
          console.log(success);
          
        }
      )
    })
  }
  openRates(){
    const dialogRef= this.dialog.open(RatesFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.ratesService.getRatesData().subscribe(
        (success:any)=>{
          console.log(success);
        }
      )
    })
  }
  openNotes(){
    const dialogRef= this.dialog.open(NotesFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.notesService.getNotesData().subscribe(
        (success:any)=>{
          console.log(success);
          
        }
      )
    })
  }
}
