import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
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
}
