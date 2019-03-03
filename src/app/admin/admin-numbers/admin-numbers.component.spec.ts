import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNumbersComponent } from './admin-numbers.component';

describe('AdminNumbersComponent', () => {
  let component: AdminNumbersComponent;
  let fixture: ComponentFixture<AdminNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
