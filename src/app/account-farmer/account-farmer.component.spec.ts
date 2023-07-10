import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFarmerComponent } from './account-farmer.component';

describe('AccountFarmerComponent', () => {
  let component: AccountFarmerComponent;
  let fixture: ComponentFixture<AccountFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
