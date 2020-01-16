import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { NewClientService } from "../../services/new-client.service";
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
  public userData:any = {details:{user_type: "c",}};
  public firstForm: boolean = true;
  public secondForm: boolean = false;
  public userId: string;
  public isEdit:boolean = false;
  public sourceData = [
    "Social Media",
    "Google",
    "Advertisement",
    "Friends and family",
    "Website",
    "Other"
  ];

  // public first_name: string;
  // public last_name: string;
  // public skype_id: string;
  // public phone: number;
  // public alt_phone: number;
  // public city: string;
  // public country: string;
  // public address: string;
  // public pin: string;
  // public email: string;
  // public password: string;
  // public c_password: string;
  // public weight: string;
  // public height: string;
  // public dob:string;

  @ViewChild("newClient", { static: true }) newClientData: ElementRef;
  constructor(
    public dialog: MatDialog,
    private newClientService: NewClientService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.userId = 21;
    // console.log(this.newclientSubmit())

    this.getparamData();
  }
  getparamData(){
    this.router.params.subscribe(response=>{
      console.log(response['userId']);
      if(response['userId']){
        this.userId = response['userId'];
        this.isEdit = true;
        this.getClientData(response['userId']);
      }else{
        this.isEdit = false;
      }
    })
  }
  getClientData(userId){
    this.newClientService.getUserData(userId).subscribe(
      (success:any)=>{
        console.log(success);
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
    this.newClientService.addClient(this.newclientFormData()).subscribe(
      (success: any) => {
        console.log(success);
        this.firstForm = false;
        this.secondForm = true;
        this.userId = success.data["user"].id;
        console.log(this.userId);
      },
      error => {
        console.log(error);
      }
    );
  }

  newclientFormData() {
    return this.userData.details;
    
    // return {
    //   first_name: this.first_name,
    //   last_name: this.last_name,
    //   skype_id: this.skype_id,
    //   phone: this.phone,
    //   alt_phone: this.alt_phone,
    //   city: this.city,
    //   country: this.country,
    //   address: this.address,
    //   pin: this.pin,
    //   email: this.email,
    //   password: this.password,
    //   c_password: this.c_password,
    //   user_type: "c",
    //   weight: this.weight,
    //   height:this.height,
    //   dob:this.dob
    // };

    // alert("click");
    // return new FormData(this.newClientData.nativeElement);
  }
}
