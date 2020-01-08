import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
// import {MatDialogRef} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QualificationService } from '../../services/qualification.service';
import { qualificationInterface } from '../../interfaces/qualificationInterface';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.scss']
})
export class QualificationFormComponent implements OnInit {
  public user : qualificationInterface = {};
  public user_id:number;
  @ViewChild("qualyForm", {static:true}) qualificationForm:ElementRef;



  constructor( 
    public dialogRef: MatDialogRef<QualificationFormComponent>,
    private qualyServices: QualificationService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

  ngOnInit() {
    this.getFromData();
    this.user_id = this.data.userId;
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
  
  public image: any;
  readURL(input) {
    console.log(input);
    
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.readAsDataURL(input.files[0]);
        reader.onload = (_event)=>{
          this.image = reader.result;
        }
    }
}
}
