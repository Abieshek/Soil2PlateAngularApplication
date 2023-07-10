import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduceListingComponent } from './create-produce-listing.component';

describe('CreateProduceListingComponent', () => {
  let component: CreateProduceListingComponent;
  let fixture: ComponentFixture<CreateProduceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProduceListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProduceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
