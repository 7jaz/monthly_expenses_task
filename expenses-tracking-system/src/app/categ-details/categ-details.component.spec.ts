import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategDetailsComponent } from './categ-details.component';

describe('CategDetailsComponent', () => {
  let component: CategDetailsComponent;
  let fixture: ComponentFixture<CategDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
