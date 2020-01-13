import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ClientDetailsInterface } from 'src/app/interfaces/ClientDetailsInterFace';

@Component({
  selector: "app-clients-lists",
  templateUrl: "./clients-lists.component.html",
  styleUrls: ["./clients-lists.component.scss"]
})
export class ClientsListsComponent implements OnInit {
  clientListData: ClientDetailsInterface[] = [];
  clientSearchData: ClientDetailsInterface[] = [];
  public searchText:string;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClintList();
  }

  getClintList() {
    this.clientService.getClientList().subscribe(
      (res: any) => {
        let data = [];
        res.data.forEach(element => {
          data.push(element.details);
        });
        this.clientListData = data;
        this.clientSearchData = this.clientListData;
        console.log(this.clientListData);
      },
      (err: any) => {}
    );
  }

  search(e){
    let searchedData = e.target.value;
    let searchelements = [];
    // this.clientSearchData = this.clientListData;
    let keys = Object.keys(this.clientListData);
    this.clientSearchData.filter((element:ClientDetailsInterface)=>{
      for(let i=0;i<keys.length; i++){
        // console.log(element,keys[i]);
        if(element[keys[i]] != 'id' && element[keys[i]] != 'user_id' && element[keys[i]].includes(searchedData)){
          console.log(keys[i], searchedData)
          // searchelements.push(element);
          return true;
        }
      }
    });
    console.log(this.clientSearchData)
  }
}
