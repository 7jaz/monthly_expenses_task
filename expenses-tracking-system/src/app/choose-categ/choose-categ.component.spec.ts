import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCategComponent } from './choose-categ.component';

describe('ChooseCategComponent', () => {
  let component: ChooseCategComponent;
  let fixture: ComponentFixture<ChooseCategComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCategComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
