import { Component, OnInit, Inject } from '@angular/core';
import { DietChatService } from 'src/app/services/diet-chat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-diet-chart-form',
  templateUrl: './diet-chart-form.component.html',
  styleUrls: ['./diet-chart-form.component.scss']
})
export class DietChartFormComponent implements OnInit {
  public dayNumber: number;
  public dayName: number;
  public week = [
    "Sunday", "monday", "Tuesday","Wednasday" , "thrusday", "Friday", "Saturday"
  ];
  public arrayTwo = [];
  public weekIndex: string;
  public dietChatObject:any = {
    
    week: '',
    notes: '',
    is_approve:0,
    items: [
      {item: '', suggest: ''}
    ],
    diet_sub_chart: [{
      day_no: '',
      day: '',
      early_morning: '',
      breakfast: '',
      mid_morning: '',
      lunch: '',
      afternoon_snack: '',
      evening_snack: '',
      dinner: '',
      after_dinner: '',
    }]
  };
  constructor(
    private service: DietChatService,
    @Inject(MAT_DIALOG_DATA)public data:any,
    public dialogRef: MatDialogRef<DietChartFormComponent>
    ) { }

  ngOnInit() {
    console.log(this.data.userId, this.data.dietitianId);
    
  }
  addDiet(){
    this.dietChatObject.diet_sub_chart.push({
      day_no: '',
      day: '',
      early_morning: '',
      breakfast: '',
      mid_morning: '',
      lunch: '',
      afternoon_snack: '',
      evening_snack: '',
      dinner: '',
      after_dinner: '',
    });
    console.log(this.dietChatObject);
    
  }
  saveDietChat(){
    this.service.getDietChat(this.dietChatObject).subscribe(
      (success:any)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
    })

  }
  close(){
    this.dialogRef.close();
  }
}
