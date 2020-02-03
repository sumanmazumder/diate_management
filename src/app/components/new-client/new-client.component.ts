import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import {
  MatDialog,
} from "@angular/material/dialog";
import { NewClientService } from "../../services/new-client.service";
import { DietitionsListService } from 'src/app/services/dietitions-list.service';
// export interface newClientInterface{
//   first_name?: string;
//   last_name?: string;
//   skype_id?:string;
//   phone?:number;
//   alt_phone?:number;
//   city?:string;
//   country?:string;
//   address?:string;
//   pin?:string;
// }
@Component({
  selector: "app-new-client",
  templateUrl: "./new-client.component.html",
  styleUrls: ["./new-client.component.scss"]
})
export class NewClientComponent implements OnInit {
  // public bmiData:number;
  public userData:any = {details:{user_type: "c"}};
  public firstForm: boolean = true;
  public secondForm: boolean = false;
  public userId: string;
  public isEdit:boolean = false;
  public title:string = 'Add New Client';
  public sourceData = [
    "Social Media",
    "Google",
    "Advertisement",
    "Friends and family",
    "Website",
    "Other"
  ];

  public userWeight:number;
  public userHeight:number;
  


  public dietititionList = [];

  @ViewChild("newClient", { static: true }) newClientData: ElementRef;
  constructor(
    public dialog: MatDialog,
    private newClientService: NewClientService,
    private router: ActivatedRoute,
    private service: DietitionsListService
  ) {}

  ngOnInit() {
    // this.userId = 21;
    this.getparamData();
    this.getDietititionList();
    
  }
  getparamData(){
    this.router.params.subscribe(response=>{
      // console.log(response['userId']);
      if(response['userId']){
        this.userId = response['userId'];
        this.isEdit = true;
        this.title = "Edit Client";
        this.getClientData(response['userId']);
      }else{
        this.isEdit = false;
      }
    })
  }

  getDietititionList(){
    this.service.getdietitionsList().subscribe(
      (success:any)=>{
        // console.log(success['data']);
        success.data.forEach(element => {
          this.dietititionList.push(element.details);
        });
      }
    )
  }

  getClientData(userId){
    this.newClientService.getUserData(userId).subscribe(
      (success:any)=>{
        
        this.userData = success.data;
        this.secondForm = true;
      },
      (error:any)=>{
        console.log(error);

      }
    )
  }
  save(){
    this.userId ? this.updateClient() : this.newclientAdd();
  }
  updateClient(){
    this.newClientService.updateClient(this.newclientFormData(), this.userId).subscribe(
      (success:any)=>{
        
        console.log(success);
      },(error)=>{
        console.log(error);
      }
    )
  }
  newclientAdd() {
    console.log(this.newclientFormData());
    
    this.newClientService.addClient(this.newclientFormData()).subscribe(
      (success: any) => {
        console.log(success);
        this.firstForm = false;
        this.secondForm = true;
        this.userId = success.data["user"].id;
      },
      error => {
        console.log(error);
      }
    );
  }

  newclientFormData() {
    return this.userData.details;
  }
}
