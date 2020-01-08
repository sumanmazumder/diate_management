import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QualificationFormComponent } from '../qualification-form/qualification-form.component';
import { KidsFormComponent } from '../kids-form/kids-form.component';
import { RatesFormComponent } from '../rates-form/rates-form.component';
import { NotesComponent } from '../notes/notes.component';
import { NewClientService } from '../../services/new-client.service';
// import { newClientInterface } from '../../interfaces/newClientInterface';

export interface newClientInterface{
  first_name?: string;
  last_name?: string;
  skype_id?:string;
  phone?:number;
  alt_phone?:number;
  city?:string;
  country?:string;
  address?:string;
  pin?:string;
}
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  animal: string;
  name: string;
  public newUser: newClientInterface={};
  @ViewChild("newClient", {static:true}) newClientData: ElementRef;
  constructor(public dialog: MatDialog, private newservice: NewClientService) { }

  ngOnInit() {
    // console.log(this.newclientSubmit())
  }
  newClient(){
    this.newservice.clientLogin(this.newclientSubmit()).subscribe(
      (newUser:any)=>{
        console.log(newUser);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

newclientSubmit(){
  // alert("click");
  return new FormData(this.newClientData.nativeElement);
}



  openQualification(){
    const dialogRef= this.dialog.open(QualificationFormComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
  openKids(){
    const dialogRef= this.dialog.open(KidsFormComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
  openRates(){
    const dialogRef= this.dialog.open(RatesFormComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
  openNotes(){
    const dialogRef= this.dialog.open(NotesComponent,{
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });
  }
}
