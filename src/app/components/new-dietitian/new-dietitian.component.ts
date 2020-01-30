import { Component, OnInit } from "@angular/core";
import { NewClientService } from "src/app/services/new-client.service";
import { SnakBarService } from "src/app/services/snak-bar.service";
import { DietitionsListService } from 'src/app/services/dietitions-list.service';
export interface newDitiationInterface {}
@Component({
  selector: "app-new-dietitian",
  templateUrl: "./new-dietitian.component.html",
  styleUrls: ["./new-dietitian.component.scss"]
})
export class NewDietitianComponent implements OnInit {
  public userData:any = {details:{user_type: "d"}};
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
  public dietititionList = [];
  constructor(
    private newservice: NewClientService,
    private snackbarService: SnakBarService,
    private service: DietitionsListService
  ) {}

  ngOnInit() {}

  getDietititionList(){
    this.service.getdietitionsList().subscribe(
      (success:any)=>{
        console.log(success['data']);
        success.data.forEach(element => {
          this.dietititionList.push(element.details);
        });
      }
    )
  }
  getClientData(userId){
    this.newservice.getUserData(userId).subscribe(
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
    alert("after save");
    this.userId ? this.updateClient() : this.newclientAdd();
  }
  // updateClient() {
  //   console.log(this.newclientFormData());
  //   if(!Object.keys(this.newclientFormData()).length){
  //     return this.snackbarService.openSnackBar('Fill the Form');
  //   }
  //   this.newservice.addClient(this.newclientFormData()).subscribe(
  //     (success: any) => {
  //       console.log(success);
  //       this.firstForm = false;
  //       this.secondForm = true;
  //       this.userId = success.data["user"].id;
  //       this.snackbarService.openSnackBar('Successfully Saved');
  //       console.log(this.userId);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  newclientAdd(){
    alert("client update");
    console.log(this.userData.details);
    this.newservice.addClient(this.newclientFormData()).subscribe(
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
  updateClient(){}
  newclientFormData() {
    return this.userData.details;
    
  }

}
