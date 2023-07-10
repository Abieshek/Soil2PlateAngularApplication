import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducePageComponent } from './produce-page.component';

describe('ProducePageComponent', () => {
  let component: ProducePageComponent;
  let fixture: ComponentFixture<ProducePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
