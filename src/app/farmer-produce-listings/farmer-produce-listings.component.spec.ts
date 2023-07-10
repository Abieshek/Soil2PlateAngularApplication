import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerProduceListingsComponent } from './farmer-produce-listings.component';

describe('FarmerProduceListingsComponent', () => {
  let component: FarmerProduceListingsComponent;
  let fixture: ComponentFixture<FarmerProduceListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerProduceListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerProduceListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
