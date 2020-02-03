import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { QualificationFormComponent } from '../../modal/qualification-form/qualification-form.component';
import { KidsFormComponent } from '../../modal/kids-form/kids-form.component';
import { RatesFormComponent } from '../../modal/rates-form/rates-form.component';
import { NotesFormComponent } from '../../modal/notes-form/notes-form.component';
import { NewClientService } from '../../../services/new-client.service';
import { newClientInterface } from '../../../interfaces/newClientInterface';
import { QualificationService } from 'src/app/services/qualification.service';


@Component({
  selector: 'app-other-client-details',
  templateUrl: './other-client-details.component.html',
  styleUrls: ['./other-client-details.component.scss']
})
export class OtherClientDetailsComponent implements OnInit {
  @Input("userId") userId:number;
  @Input("userData") userData:any;
  public otherDetails:any = {};
  constructor(
    public dialog: MatDialog, 
    private newservice: NewClientService,
    private qualiservice: QualificationService
  ) { }

  ngOnInit() {
    // console.log(this.getOtherUserdata());
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes.userId){
      if(this.userId){
        // console.log(this.userId);
      }
    }
    if(changes.userData){
      if(this.userData){
        // console.log(this.userData);
        this.otherDetails = this.userData;
      }
    }
  }
  getOtherUserdata(){
    this.newservice.getUserData(this.userId).subscribe(
      (success:any)=>{
        // console.log(success);
        this.otherDetails = success.data;
        console.log(this.otherDetails);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  openQualification(){
    const dialogRef= this.dialog.open(QualificationFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result=='success'){
        this.getOtherUserdata();
        console.log(this.getOtherUserdata());
        
      }
    })
  }
  openKids(){
    // console.log(this.userId);
    
    const dialogRef= this.dialog.open(KidsFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.getOtherUserdata();
    })
  }
  openRates(){
    const dialogRef= this.dialog.open(RatesFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.getOtherUserdata();
    })
  }
  openNotes(){
    const dialogRef= this.dialog.open(NotesFormComponent,{
      width: '550px',
      data: {userId: this.userId}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.getOtherUserdata();
    })
  }


  QualificationDel(id){
    console.log(id);
    console.log(this.otherDetails.qualification);
    this.qualiservice.deleteQualification(this.otherDetails.qualification, id).subscribe(
      
      (success:any)=>{
        console.log(success);
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
