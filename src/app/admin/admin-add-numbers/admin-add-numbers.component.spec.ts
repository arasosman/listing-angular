import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNumbersComponent } from './admin-add-numbers.component';

describe('AdminAddNumbersComponent', () => {
  let component: AdminAddNumbersComponent;
  let fixture: ComponentFixture<AdminAddNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
