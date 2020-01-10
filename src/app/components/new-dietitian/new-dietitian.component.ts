import { Component, OnInit } from "@angular/core";
import { NewClientService } from "src/app/services/new-client.service";
import { SnakBarService } from "src/app/services/snak-bar.service";
export interface newDitiationInterface {
  first_name?: string;
  last_name?: string;
  skype_id?: string;
  phone?: number;
  alt_phone?: number;
  city?: string;
  country?: string;
  address?: string;
  pin?: string;
  sp_first_name?: string;
  sp_last_name?: string;
  sp_anniversary?: string;
  type?: string;
  email?: string;
  c_password?: string;
  password?: string;
}
@Component({
  selector: "app-new-dietitian",
  templateUrl: "./new-dietitian.component.html",
  styleUrls: ["./new-dietitian.component.scss"]
})
export class NewDietitianComponent implements OnInit {
  public firstForm: boolean = true;
  public secondForm: boolean = false;
  public userId: number;
  public data: newDitiationInterface = {};
  public sourceData = [
    "Social Media",
    "Google",
    "Advertisement",
    "Friends and family",
    "Website",
    "Other"
  ];
  constructor(
    private newservice: NewClientService,
    private snackbarService: SnakBarService
  ) {}

  ngOnInit() {}
  newditationAdd() {
    console.log(this.newclientFormData());
    if(!Object.keys(this.newclientFormData()).length){
      return this.snackbarService.openSnackBar('Fill the Form');
    }
    this.newservice.addClient(this.newclientFormData()).subscribe(
      (success: any) => {
        console.log(success);
        this.firstForm = false;
        this.secondForm = true;
        this.userId = success.data["user"].id;
        this.snackbarService.openSnackBar('Successfully Saved');
        console.log(this.userId);
      },
      error => {
        console.log(error);
      }
    );
  }
  newclientFormData() {
    return this.data;
  }
}
