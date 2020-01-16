import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesFormComponent } from './rates-form.component';

describe('RatesFormComponent', () => {
  let component: RatesFormComponent;
  let fixture: ComponentFixture<RatesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
