import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdernumberComponent } from './ordernumber.component';

describe('OrdernumberComponent', () => {
  let component: OrdernumberComponent;
  let fixture: ComponentFixture<OrdernumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdernumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdernumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
