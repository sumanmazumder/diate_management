import { Component, OnInit } from '@angular/core';
import { DietitionsListService } from 'src/app/services/dietitions-list.service';

@Component({
  selector: 'app-dietitial-list',
  templateUrl: './dietitian-list.component.html',
  styleUrls: ['./dietitian-list.component.scss']
})
export class DietitianListComponent implements OnInit {
  public dietititionList = [];
  constructor(private service: DietitionsListService) { }

  ngOnInit() {
    console.log(this.getDietititionList());

  }
  getDietititionList(){
    this.service.getdietitionsList().subscribe(
      (success:any)=>{
        console.log(success['data']);
        success.data.forEach(element => {
          this.dietititionList.push(element.details);
        });
      }
    )
  }
}
