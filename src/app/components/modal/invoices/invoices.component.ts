import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InvoiceFormService } from '../../../services/invoice-form.service';
import { invoicesInterface } from '../../../interfaces/invoicesInterface';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  @ViewChild("invoicesForm", {static:true}) invoicesForm:ElementRef;
  public user: invoicesInterface ={};

  constructor(
    private service:InvoiceFormService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<InvoicesComponent>
  ) { }

  ngOnInit() {
    console.log(this.data.userId);
    
  }
  invoicesFromData(){
    this.service.invoicesForm(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        this.close('success');
      },(error)=>{
        console.log(error);
        
      }
    )
  }
  getFromData(){
    return new FormData(this.invoicesForm.nativeElement)
  }
  close(param){
    this.dialogRef.close(param)
  }
}
