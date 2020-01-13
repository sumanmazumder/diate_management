import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ClientDetailsInterface } from 'src/app/interfaces/ClientDetailsInterFace';
import {Sort} from '@angular/material/sort';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: "app-clients-lists",
  templateUrl: "./clients-lists.component.html",
  styleUrls: ["./clients-lists.component.scss"]
})
export class ClientsListsComponent implements OnInit {
  clientListData: ClientDetailsInterface[] = [];
  clientSearchData: ClientDetailsInterface[] = [];

  public sortedData = [];
  public sortedData2 = [];

  public userId : number;

  public searchText:string;
  
  // this.sortedData: this.data;

  constructor(private clientService: ClientService, public routers :Router) {
    this.sortedData2 = this.sortedData.slice();
  }

  ngOnInit() {
    this.getClintList();
  }
  getClintList() {
    this.clientService.getClientList().subscribe(
      (res: any) => {    
        res.data.forEach(element => {
          this.sortedData.push(element.details);
        });
        this.clientListData = this.sortedData;
        console.log(this.clientListData);

        this.clientListData.forEach(element => {
          this.userId = element.user_id;
        });



        // this.clientSearchData = this.clientListData;
        // console.log(this.clientListData);
        
      },
      (err: any) => {}
    );
  }

  // search(e){
  //   let searchedData = e.target.value;
  //   let searchelements = [];
  //   // this.clientSearchData = this.clientListData;
  //   let keys = Object.keys(this.clientListData);
  //   this.clientSearchData.filter((element:ClientDetailsInterface)=>{
  //     for(let i=0;i<keys.length; i++){
  //       // console.log(element,keys[i]);
  //       if(element[keys[i]] != 'id' && element[keys[i]] != 'user_id' && element[keys[i]].includes(searchedData)){
  //         console.log(keys[i], searchedData)
  //         // searchelements.push(element);
  //         return true;
  //       }
  //     }
  //   });
  //   console.log(this.clientSearchData)
  // }
  
  clientView(){
    let passData: NavigationExtras={
      queryParams:{
        'getUserId': this.userId, 
      }
    }
    this.routers.navigate(['./clientDetails'], passData)
  }
















  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData2 = data;
      return;
    }

    this.sortedData2 = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'first_name': return compare(a.first_name, b.first_name, isAsc);
        case 'city': return compare(a.city, b.city, isAsc);
        case 'country': return compare(a.country, b.country, isAsc);
        default: return 0;
      }
    });
  }
  
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
