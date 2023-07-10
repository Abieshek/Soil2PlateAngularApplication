import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduceListingComponent } from './update-produce-listing.component';

describe('UpdateProduceListingComponent', () => {
  let component: UpdateProduceListingComponent;
  let fixture: ComponentFixture<UpdateProduceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProduceListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProduceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
