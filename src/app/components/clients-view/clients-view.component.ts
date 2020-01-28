import { Component, OnInit } from "@angular/core";
import { NewClientService } from "../../services/new-client.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { MedicalHistoryComponent } from "../modal/medical-history/medical-history.component";
import { ProgressComponent } from "../modal/progress/progress.component";
import { NotesComponent } from "../modal/notes/notes.component";
import { TasksComponent } from "../modal/tasks/tasks.component";
import { IssuesComponent } from "../modal/issues/issues.component";
import { InvoicesComponent } from "../modal/invoices/invoices.component";
import { DietChartFormComponent } from '../modal/diet-chart-form/diet-chart-form.component';

@Component({
  selector: "app-clients-view",
  templateUrl: "./clients-view.component.html",
  styleUrls: ["./clients-view.component.scss"]
})
export class ClientsViewComponent implements OnInit {
  public userId: number;
  public Id: number;
  public dietitianId: number;
  public userData: any;
  public userDetails: any;
  public found:any;

  mediaclId:number;
  myDialog = new MatDialogConfig();
  // medicalId: number;
  // medicalTitle: string;
  // medicalText: string;
  // medicaldoc: string;

  constructor(
    private newClientService: NewClientService,
    private router: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.myDialog.disableClose = false;
    this.myDialog.autoFocus = false;
    this.myDialog.width = '500px';
    
  }

  ngOnInit() {
    this.getParamaterData();
    // this.clientOtherDetails();
    console.log(this.userId);
    console.log(this.dietitianId);
    
  }
  getParamaterData() {
    this.router.params.subscribe(response => {
      this.userId = response["userId"];
      this.getClientData(response["userId"]);
      this.dietitianId = response["dietitian_id"]
    });
  }
  getClientData(userId) {
    this.newClientService.getUserData(userId).subscribe((success: any) => {
      this.userData = success["data"];
      this.userDetails=success["data"].details;
      this.userData.medhistory.forEach(element => {
        // this.mediaclId = element.id;
        // console.log(this.mediaclId);
      });
      console.log(this.userData)
    });
  }

    
      

    
  medicalAdd() {
    // this.myDialog.data = {userId: this.userId}
    const dialogRef = this.dialog.open(MedicalHistoryComponent,{
      width: '500px',
      data: {userId: this.userId}
    });    
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success'){
        this.getClientData(this.userId);        
      }
    });
  }
  
  MediEdit(id:number){
    const found = this.userData.medhistory.find(element=>{
      return element.id == id;
    });
    const dialogRef = this.dialog.open(MedicalHistoryComponent,{
      data : {fullData : found},
      
    });
    // console.log(found);
  }
  Delete(){

  }





  progressAdd() {
    this.myDialog.data = {userId: this.userId}
    const dialogRef = this.dialog.open(ProgressComponent, this.myDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success'){
        this.getClientData(this.userId);
      }
    });
  }
  notesAdd() {
    this.myDialog.data = {userId: this.userId}
    const dialogRef = this.dialog.open(NotesComponent,this.myDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success'){
        this.getClientData(this.userId);
      }
    });
  }
  tacksAdd() {
    this.myDialog.data = {userId: this.userId}
    const dialogRef = this.dialog.open(TasksComponent, this.myDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success'){
        this.getClientData(this.userId);
      };
    });
  }
  issuesAdd() {
    this.myDialog.data = {userId: this.userId}
    const dialogRef = this.dialog.open(IssuesComponent, this.myDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success'){
        this.getClientData(this.userId);
      }
    });
  }
  invoicesAdd() {
    this.myDialog.data = {userId: this.userId}
    const dialogRef = this.dialog.open(InvoicesComponent, this.myDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success'){
        this.getClientData(this.userId);
      }
    });
  }
  dietChat(){
    const dialogRef = this.dialog.open(DietChartFormComponent, {
      width: "1000px",
      data: { userId: this.userId, dietitianId:  this.dietitianId}
    });
  }

}
