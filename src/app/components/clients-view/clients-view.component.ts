import { Component, OnInit } from "@angular/core";
import { NewClientService } from "../../services/new-client.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

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
  public userData: any;
  public userDetails: any;
  public medhistiory: any;
  public progress: any;
  public notes: any;
  constructor(
    private newClientService: NewClientService,
    private router: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getParamaterData();
    // this.clientOtherDetails();
  }
  getParamaterData() {
    // this.router.queryParams.subscribe(passData=>{
    //   this.userId = passData['getUserId'];
    //   console.log(this.userId);
    // })
    this.router.params.subscribe(response => {
      this.userId = response["userId"];
      // console.log(response["userId"]);
      this.getClientData(response["userId"]);
    });
  }
  getClientData(userId) {
    this.newClientService.getUserData(userId).subscribe((success: any) => {
      this.userData = success["data"];
      this.userDetails=success["data"].details;
      // this.medhistiory = success["data"].medhistory;
      // this.progress = success["data"].progress;
      this.notes = success["data"].notes;
      console.log(this.userData);
      // console.log(this.userData);
    });
  }

  medicalAdd() {
    const dialogRef = this.dialog.open(MedicalHistoryComponent, {
      width: "500px",
      data: { userId: this.userId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientData(this.userId);
    });
  }
  progressAdd() {
    const dialogRef = this.dialog.open(ProgressComponent, {
      width: "500px",
      data: { userId: this.userId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientData(this.userId);
    });
  }
  notesAdd() {
    const dialogRef = this.dialog.open(NotesComponent, {
      width: "500px",
      data: { userId: this.userId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientData(this.userId);
    });
  }
  tacksAdd() {
    const dialogRef = this.dialog.open(TasksComponent, {
      width: "500px",
      data: { userId: this.userId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientData(this.userId);
    });
  }
  issuesAdd() {
    const dialogRef = this.dialog.open(IssuesComponent, {
      width: "500px",
      data: { userId: this.userId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientData(this.userId);
    });
  }
  invoicesAdd() {
    const dialogRef = this.dialog.open(InvoicesComponent, {
      width: "500px",
      data: { userId: this.userId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientData(this.userId);
    });
  }
  dietChat(){
    const dialogRef = this.dialog.open(DietChartFormComponent, {
      width: "1000px",
      data: { userId: this.userId }
    });
  }
}
