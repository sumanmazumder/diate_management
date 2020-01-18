import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietitianListComponent } from './dietitian-list.component';

describe('DietitialListComponent', () => {
  let component: DietitianListComponent;
  let fixture: ComponentFixture<DietitianListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietitianListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietitianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
