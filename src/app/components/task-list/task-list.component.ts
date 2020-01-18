import { Component, OnInit } from '@angular/core';
import { TasksListService } from 'src/app/services/tasks-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public tastsList:any;
  constructor(private service: TasksListService) { }

  ngOnInit() {
    console.log(this.taskList());
    
  }
  taskList(){
    this.service.getTaskList().subscribe(
      (success)=>{
        console.log(success);
        this.tastsList = success['data']
      }
    )
  }
}
