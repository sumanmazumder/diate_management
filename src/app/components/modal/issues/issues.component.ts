import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { IssueService } from '../../../services/issue.service';
import { issueInterface } from '../../../interfaces/issueInterface';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  @ViewChild("issueForm", {static:true}) issueForm:ElementRef;
  public user: issueInterface = {};
  constructor(
    private issueServices:IssueService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<IssuesComponent>
  ) { }

  ngOnInit() {
  }
  issueFromData(){
    this.issueServices.issueFromData(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.close();
      },(error)=>{
        console.log(error);
      }
    )
  }
  getFromData(){
    return new FormData(this.issueForm.nativeElement)
  }
  close(){
    this.dialogRef.close();
  }
}
