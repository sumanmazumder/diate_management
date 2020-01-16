import { Component, OnInit } from '@angular/core';
import { NewClientService } from '../../services/new-client.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


import { MedicalHistoryComponent } from '../modal/medical-history/medical-history.component';
import { ProgressComponent } from '../modal/progress/progress.component';
import { NotesComponent } from '../modal/notes/notes.component';
import { TasksComponent } from '../modal/tasks/tasks.component';
import { IssuesComponent } from '../modal/issues/issues.component';
import { InvoicesComponent } from '../modal/invoices/invoices.component';

@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.scss']
})
export class ClientsViewComponent implements OnInit {
  constructor( private newClientService: NewClientService, private router: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.getParamaterData()
  }
  getParamaterData(){
    // this.router.queryParams.subscribe(passData=>{
    //   this.userId = passData['getUserId'];
    //   console.log(this.userId);
    // })
    this.router.params.subscribe(response=>{
      console.log(response['userId']);
      this.getClientData(response['userId']);
    })
  }
  getClientData(userId){
    this.newClientService.getUserData(userId).subscribe(
      (success:any)=>{
        console.log(success);
      }
    )
  }
  medicalAdd(){
    this.dialog.open(MedicalHistoryComponent, {
      width:'500px',
      data: {}
    })
  }
  progressAdd(){
    this.dialog.open(ProgressComponent,{
      width:'500px',
      data: {}
    })
  }
  notesAdd(){
    this.dialog.open(NotesComponent, {
      width:'500px',
      data: {}
    })
  }
  tacksAdd(){
    this.dialog.open(TasksComponent, {
      width:'500px',
      data: {}
    })
  }
  issuesAdd(){
    this.dialog.open(IssuesComponent,{
      width:'500px',
      data: {}
    })
  }
  invoicesAdd(){
    this.dialog.open(InvoicesComponent,{
      width:'500px',
      data: {}
    })
  }
}
