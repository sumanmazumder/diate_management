import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  sideBarlist=[
    {id: 1, name:'Dashboard', link: 'allDetails', isActive: false},
    {id: 2, name:'Clients', link: 'client-lists', isActive: false},
    {id: 3, name:'Dietitians', link: 'dietitions-lists', isActive: false},
    {id: 4, name:'Notes', link: 'notes-list', isActive: false},
    {id: 5, name:'Tasks', link: 'task-list', isActive: false},
    {id: 6, name:'Issues', link: 'issue-list', isActive: false},
    {id: 7, name:'Calender', link: 'canendar', isActive: false},
    {id: 8, name:'Invoices', link: 'invoices', isActive: false},
    {id: 9, name:'Settings', link: 'settings', isActive: false},

  ]

  ngOnInit() {
  }

  setActive(id){
    // this.sideBarlist.find(e=>e.isActive = true);
    this.sideBarlist.forEach((e)=>{
       if(e.id == id){
         e.isActive = true;
       }else{
         e.isActive = false;
       }
      })

      console.log(this.sideBarlist)
  }

}
