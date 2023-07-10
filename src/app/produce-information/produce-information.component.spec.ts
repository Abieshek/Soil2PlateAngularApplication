import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduceInformationComponent } from './produce-information.component';

describe('ProduceInformationComponent', () => {
  let component: ProduceInformationComponent;
  let fixture: ComponentFixture<ProduceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduceInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
