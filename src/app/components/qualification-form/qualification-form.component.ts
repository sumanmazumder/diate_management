import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { QualificationService } from '../../services/qualification.service';
// import { qualificationInterface } from '../../interfaces/qualificationInterface';
export interface qualificationInterface{
  // user_id?:string,
    title?:string,
    text?:string,
    doc?:string
}
@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.scss']
})
export class QualificationFormComponent implements OnInit {

  public user : qualificationInterface = {};
  @ViewChild("qualyForm", {static:true}) qualificationForm:ElementRef
  constructor( 
    public dialogRef: MatDialogRef<QualificationFormComponent>,
    private qualyServices: QualificationService
    ) { }

  ngOnInit() {
    this.getFromData();
  }
  qualificationSubmit(){
    this.qualyServices.qualificationData(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.closeDialog();
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  closeDialog(){
    this.dialogRef.close();
  }



  getFromData(){
    return new FormData (this.qualificationForm.nativeElement);
  }
  
}
