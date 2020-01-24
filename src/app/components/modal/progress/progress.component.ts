import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ProgressService } from '../../../services/progress.service';
import { progressInterface } from '../../../interfaces/progressInterface';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @ViewChild("progressForm", {static:true}) progressForm:ElementRef;
  public user: progressInterface = {};
  constructor(
    private medicalServices:ProgressService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<ProgressComponent>
  ) { }

  ngOnInit() {
  }
  progressFromData(){
    this.medicalServices.progress(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.close('success');
      },(error)=>{
        console.log(error);
      }
    )
  }
  getFromData(){
    return new FormData(this.progressForm.nativeElement)
  }
  close(param){
    this.dialogRef.close(param);
  }
}
