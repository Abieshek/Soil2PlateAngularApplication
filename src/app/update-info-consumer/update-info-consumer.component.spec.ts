import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoConsumerComponent } from './update-info-consumer.component';

describe('UpdateInfoConsumerComponent', () => {
  let component: UpdateInfoConsumerComponent;
  let fixture: ComponentFixture<UpdateInfoConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfoConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInfoConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
