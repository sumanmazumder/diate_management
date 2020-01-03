import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-kids-form',
  templateUrl: './kids-form.component.html',
  styleUrls: ['./kids-form.component.scss']
})
export class KidsFormComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<KidsFormComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
