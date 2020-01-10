import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { QualificationFormComponent } from "../qualification-form/qualification-form.component";
import { KidsFormComponent } from "../kids-form/kids-form.component";
import { RatesFormComponent } from "../rates-form/rates-form.component";
import { NotesFormComponent } from "../notes-form/notes-form.component";
import { NewClientService } from "../../services/new-client.service";
import { newClientInterface } from "../../interfaces/newClientInterface";

import { QualificationService } from "src/app/services/qualification.service";
import { KidsService } from "../../services/kids.service";
import { NotesService } from "../../services/notes.service";
import { RatesService } from "../../services/rates.service";

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
  public firstForm: boolean = true;
  public secondForm: boolean = false;
  public userId: number;
  public sourceData = [
    "Social Media",
    "Google",
    "Advertisement",
    "Friends and family",
    "Website",
    "Other"
  ];

  public first_name: string;
  public last_name: string;
  public skype_id: string;
  public phone: number;
  public alt_phone: number;
  public city: string;
  public country: string;
  public address: string;
  public pin: string;
  public email: string;
  public password: string;
  public c_password: string;

  @ViewChild("newClient", { static: true }) newClientData: ElementRef;
  constructor(
    public dialog: MatDialog,
    private newservice: NewClientService,
    private qualificationService: QualificationService,
    private kidsService: KidsService,
    private notesService: NotesService,
    private ratesService: RatesService
  ) {}

  ngOnInit() {
    // this.userId = 21;
    // console.log(this.newclientSubmit())
  }
  newclientAdd() {
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

  newclientFormData() {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      skype_id: this.skype_id,
      phone: this.phone,
      alt_phone: this.alt_phone,
      city: this.city,
      country: this.country,
      address: this.address,
      pin: this.pin,
      email: this.email,
      password: this.password,
      c_password: this.c_password,
      user_type: "c"
    };

    // alert("click");
    // return new FormData(this.newClientData.nativeElement);
  }
}
