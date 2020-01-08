import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QualificationFormComponent } from '../qualification-form/qualification-form.component';
import { KidsFormComponent } from '../kids-form/kids-form.component';
import { RatesFormComponent } from '../rates-form/rates-form.component';
import { NotesComponent } from '../notes/notes.component';
import { NewClientService } from '../../services/new-client.service';
import { newClientInterface } from '../../interfaces/newClientInterface';

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
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  public firstForm : boolean = true;
  public secondForm : boolean = false;

  public first_name:string;
  public last_name:string;
  public skype_id:string;
  public phone:number;
  public alt_phone:number;
  public city:string;
  public country:string;
  public address:string;
  public pin:string;
  public email:string;
  public password:string;
  public c_password:string;
  public type:string;


  
  @ViewChild("newClient", {static:true}) newClientData: ElementRef;
  constructor(public dialog: MatDialog, private newservice: NewClientService) { }

  ngOnInit() {
    // console.log(this.newclientSubmit())
  }
  newclientAdd(){
    this.newservice.addClient(this.newclientFormData()).subscribe(
      (suceesss:any)=>{
        console.log(suceesss);
        this.firstForm = false;
        this.secondForm = true;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

newclientFormData(){
  return(
    {
      first_name: this.first_name,
      last_name: this.last_name,
      skype_id: this.skype_id,
      phone: this.phone,
      alt_phone:this.alt_phone,
      city: this.city,
      country: this.country,
      address: this.address,
      pin: this.pin,
      email: this.email,
      password: this.password,
      c_password: this.c_password,
      user_type: this.type
    }
  )

  // alert("click");
  // return new FormData(this.newClientData.nativeElement);
}



  openQualification(){
    const dialogRef= this.dialog.open(QualificationFormComponent,{
      width: '550px',
      data: {}
    });
  }
  openKids(){
    const dialogRef= this.dialog.open(KidsFormComponent,{
      width: '550px',
      data: {}
    });
  }
  openRates(){
    const dialogRef= this.dialog.open(RatesFormComponent,{
      width: '550px',
      data: {}
    });
  }
  openNotes(){
    const dialogRef= this.dialog.open(NotesComponent,{
      width: '550px',
      data: {}
    });
  }
}
