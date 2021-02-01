import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentesCreatorComponent } from './ventes-creator.component';

describe('VentesCreatorComponent', () => {
  let component: VentesCreatorComponent;
  let fixture: ComponentFixture<VentesCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentesCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentesCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
