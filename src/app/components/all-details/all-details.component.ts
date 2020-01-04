import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.scss']
})
export class AllDetailsComponent implements OnInit {

  constructor(public router :Router) { }

  ngOnInit() {
  }
  addClient(){
    alert("vcmm");
    this.router.navigate(['newClients'])
  }
  addDietitian(){

  }
}
