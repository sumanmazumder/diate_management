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
  // public user: medicalHistoryInterface = {};
  public userData:any = {details:{user_id : this.data.userId}};
  @ViewChild('file', {static:false})file:File;
  constructor(private medicalServices:MedicalHistoryService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<MedicalHistoryComponent>
    ) { }

  ngOnInit() {
    console.log(this.data.userId);
    console.log(this.data.fullData);
    if(this.data.fullData && this.data.userId){

      this.userData.details= this.data.fullData;
    }
  }
  ngAfterViewInit(): void {
  }
  submit(){
    console.log(this.file['nativeElement'].files[0]);
    console.log(this.data.fullData);
    
    this.data.fullData? this.update() : this.store();
  }
  update(){

  }
  store(){
    console.log(this.getFromData());
    this.medicalServices.medicalHistory(this.getFromData()).subscribe(
      (success:any)=>{
        console.log(success);
        this.close('success');
      },(error)=>{
        console.log(error);
      }
    )
  }
  getFromData(){
    // this.userData.details.doc = this.file['nativeElement'].files[0]
    return new FormData(this.medicalHistoryForm.nativeElement)
    // return this.userData.details;
  }
  close(param){
    this.dialogRef.close(param);
  }
}
