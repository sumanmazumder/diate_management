import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsFormComponent } from './kids-form.component';

describe('KidsFormComponent', () => {
  let component: KidsFormComponent;
  let fixture: ComponentFixture<KidsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
