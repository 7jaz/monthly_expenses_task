import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesCategComponent } from './expenses-categ.component';

describe('ExpensesCategComponent', () => {
  let component: ExpensesCategComponent;
  let fixture: ComponentFixture<ExpensesCategComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesCategComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
