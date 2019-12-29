import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDietitianComponent } from './new-dietitian.component';

describe('NewDietitianComponent', () => {
  let component: NewDietitianComponent;
  let fixture: ComponentFixture<NewDietitianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDietitianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDietitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
