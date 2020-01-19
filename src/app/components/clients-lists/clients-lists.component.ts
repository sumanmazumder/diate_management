import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ClientDetailsInterface } from "src/app/interfaces/ClientDetailsInterFace";
import { Sort } from "@angular/material/sort";
import { NavigationExtras, Router } from "@angular/router";

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

  public searchText: string;

  // this.sortedData: this.data;

  constructor(private clientService: ClientService, public routers: Router) {
    // this.sortedData2 = this.sortedData.slice();
  }

  ngOnInit() {
    this.getClintList();
  }
  getClintList() {
    this.clientService.getClientList().subscribe(
      (res: any) => {
        res.data.forEach((element, index) => {
          let name ="";
          this.sortedData.push(element.details);
            name = (this.sortedData[index].first_name ? this.sortedData[index].first_name : '')
            + " " + (this.sortedData[index].last_name
           ? this.sortedData[index].last_name
           : "");
           console.log(name)
          this.sortedData[index].name = name;
        });

        this.clientListData = this.sortedData;
        console.log(this.clientListData);

        // this.clientSearchData = this.clientListData;
        // console.log(this.clientListData);
      },
      (err: any) => {}
    );
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === "") {
      this.clientListData = data;
      return;
    }

    this.clientListData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      // console.log(sort.active)
      switch (sort.active) {
        case "name":
          return compare(
            a.first_name.toLowerCase(),
            b.first_name.toLowerCase(),
            isAsc
          );
        case "city":
          return compare(a.city ? a.city.toLowerCase() : '', b.city ? b.city.toLowerCase() : '', isAsc);
        case "country":
          return compare(
            a.country.toLowerCase(),
            b.country.toLowerCase(),
            isAsc
          );
        default:
          return 0;
      }
    });
    console.log(this.clientListData);
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  console.log(a, b, isAsc);
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
