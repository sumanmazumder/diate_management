import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ratesInterface } from '../../../interfaces/ratesInterface';
import { RatesService } from '../../../services/rates.service';
@Component({
  selector: 'app-rates-form',
  templateUrl: './rates-form.component.html',
  styleUrls: ['./rates-form.component.scss']
})
export class RatesFormComponent implements OnInit {
  public user : ratesInterface = {};
  @ViewChild("ratesForm", {static:true}) ratesForm:ElementRef;
  constructor(
    public dialogRef: MatDialogRef<RatesFormComponent>,
    private ratesServices: RatesService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }
    public dataUserId = this.data.userId;
  ngOnInit() {
    this.dataUserId = 21;
  }
  rateFromSubmit(){
    this.ratesServices.ratesData(this.getRateFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.closeDialog();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  getRateFromData(){
    return new FormData(this.ratesForm.nativeElement);
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
