import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { TacksFormService } from '../../../services/tacks-form.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { tacksInterface } from '../../../interfaces/tacksInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @ViewChild("tacksForm", {static:true}) tacksForm:ElementRef;
  public user: tacksInterface = {}
  constructor(
    private service : TacksFormService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<TasksComponent>
  ) { }

  ngOnInit() {
    console.log(this.data.userId);
    
  }
  tacksFromData(){
    this.service.tacksForm(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        
      },(error)=>{
        console.log(error);
        
      }
    )
  }
  getFromData(){
    return new FormData(this.tacksForm.nativeElement)
  }
  close(){
    this.dialogRef.close()
  }
}
