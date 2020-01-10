import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { kidsInterface } from '../../interfaces/kidsInterfaces';
import { KidsService } from '../../services/kids.service';
@Component({
  selector: 'app-kids-form',
  templateUrl: './kids-form.component.html',
  styleUrls: ['./kids-form.component.scss']
})
export class KidsFormComponent implements OnInit {
  public user: kidsInterface = {};
  @ViewChild("kidsForm", {static: true}) kidsForm:ElementRef;
  constructor( public dialogRef: MatDialogRef<KidsFormComponent>,
    private KidsService: KidsService,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit() {
    console.log(this.data.userId);
    
  }

  closeDialog(){
    this.dialogRef.close();
  }
  kidsSubmit(){
    this.KidsService.kidsData(this.getKidsFormData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.closeDialog();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  getKidsFormData(){
    return new FormData(this.kidsForm.nativeElement);
  }
}
