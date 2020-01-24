import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MedicalHistoryService } from '../../../services/medical-history.service';
import { medicalHistoryInterface } from '../../../interfaces/medicalHistoryInterface';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {
  @ViewChild("medicalHistoryForm", {static:true}) medicalHistoryForm:ElementRef;
  public user: medicalHistoryInterface = {};

  medicalData = {
    title: this.data.title,
    text: this.data.text,
    doc: this.data.doc,
  }
  constructor(private medicalServices:MedicalHistoryService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<MedicalHistoryComponent>
    ) { }

  ngOnInit() {
    console.log(this.data.userId);
    console.log(this.data.medicalId);
    
  }
  medicalHistoryFromData(){
    this.medicalServices.medicalHistory(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.close('success');
      },(error)=>{
        console.log(error);
      }
    )
  }
  getFromData(){
    return new FormData(this.medicalHistoryForm.nativeElement)
  }
  close(param){
    this.dialogRef.close(param);
  }
}
