import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreationFarmerComponent } from './account-creation-farmer.component';

describe('AccountCreationFarmerComponent', () => {
  let component: AccountCreationFarmerComponent;
  let fixture: ComponentFixture<AccountCreationFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCreationFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCreationFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
