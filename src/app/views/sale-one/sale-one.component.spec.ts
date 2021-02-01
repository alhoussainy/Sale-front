import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOneComponent } from './sale-one.component';

describe('SaleOneComponent', () => {
  let component: SaleOneComponent;
  let fixture: ComponentFixture<SaleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
