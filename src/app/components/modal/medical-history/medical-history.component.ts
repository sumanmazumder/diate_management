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
  constructor(private medicalServices:MedicalHistoryService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<MedicalHistoryComponent>
    ) { }

  ngOnInit() {
    console.log(this.data.userId);
    
  }
  medicalHistoryFromData(){
    this.medicalServices.medicalHistory(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.close();
      },(error)=>{
        console.log(error);
      }
    )
  }
  getFromData(){
    return new FormData(this.medicalHistoryForm.nativeElement)
  }
  close(){
    this.dialogRef.close();
  }
}
