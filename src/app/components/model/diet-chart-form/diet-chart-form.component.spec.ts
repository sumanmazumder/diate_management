import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietChartFormComponent } from './diet-chart-form.component';

describe('DietChartFormComponent', () => {
  let component: DietChartFormComponent;
  let fixture: ComponentFixture<DietChartFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietChartFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietChartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
