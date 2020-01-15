import { Component, OnInit } from '@angular/core';
import { NewClientService } from '../../services/new-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.scss']
})
export class ClientsViewComponent implements OnInit {
  constructor( private newClientService: NewClientService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getParamaterData()
  }
  add(){
    
  }
  getParamaterData(){
    // this.router.queryParams.subscribe(passData=>{
    //   this.userId = passData['getUserId'];
    //   console.log(this.userId);
    // })
    this.router.params.subscribe(response=>{
      console.log(response['userId']);
      this.getClientData(response['userId']);
    })
  }
  getClientData(userId){
    this.newClientService.getUserData(userId).subscribe(
      (success:any)=>{
        console.log(success);
      }
    )
  }

}
