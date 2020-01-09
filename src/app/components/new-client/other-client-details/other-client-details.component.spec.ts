import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherClientDetailsComponent } from './other-client-details.component';

describe('OtherClientDetailsComponent', () => {
  let component: OtherClientDetailsComponent;
  let fixture: ComponentFixture<OtherClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
