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
  // @ViewChild("tacksForm", {static:true}) tacksForm:ElementRef;
  public user: tacksInterface = {}
  public priority = ["high", "low", "Midium"]
  public subTask:any= [{sub_task: ''}];
  public userTask:any = {details:{}}
  constructor(
    private service : TacksFormService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<TasksComponent>
  ) { }

  ngOnInit() {
    console.log(this.data.userId);
    
    
  }
  tacksFromData(){
    console.log(this.getFromData());
    
    // this.service.tacksForm(this.getFromData()).subscribe(
    //   (user:any)=>{
    //     console.log(user);
    //     this.close('success')
    //   },(error)=>{
    //     console.log(error);
        
    //   }
    // )
  }
  getFromData(){
    // return new FormData(this.tacksForm.nativeElement)
    this.userTask.details.sub_task = this.subTask;
    return this.userTask.details;
  }
  close(param){
    this.dialogRef.close(param)
  }
  addSubtask(){
    // alert("cmvm");
    console.log(this.subTask);
    this.subTask.push({sub_task: ''})
  }
}
