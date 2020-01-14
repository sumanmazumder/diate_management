import { Component, OnInit } from '@angular/core';
import { NewClientService } from '../../services/new-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.scss']
})
export class ClientsViewComponent implements OnInit {
  public userId: number;
  constructor( private newClient: NewClientService, private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.getData());
    console.log(this.getClientData())
  }
  add(){
    
  }
  getData(){
    this.router.queryParams.subscribe(passData=>{
      // console.log(passData);
      this.userId = passData['getUserId'];
      console.log(this.userId);
    })
  }
  getClientData(){
    this.newClient.getUserData(this.userId).subscribe(
      (success:any)=>{
        console.log(success);
      }
    )
  }

}
