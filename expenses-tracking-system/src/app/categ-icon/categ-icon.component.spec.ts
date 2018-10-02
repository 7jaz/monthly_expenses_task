import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategIconComponent } from './categ-icon.component';

describe('CategIconComponent', () => {
  let component: CategIconComponent;
  let fixture: ComponentFixture<CategIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
