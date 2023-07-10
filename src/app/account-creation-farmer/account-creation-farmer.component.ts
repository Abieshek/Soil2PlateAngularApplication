import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
import { Address } from '../address';
import { Farmer } from '../farmer';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-account-creation-farmer',
  templateUrl: './account-creation-farmer.component.html',
  styleUrls: ['./account-creation-farmer.component.css']
})
export class AccountCreationFarmerComponent implements OnInit {

  farmer: Farmer = new Farmer();
  address : Address = new Address();

  userEmail!: string;
  userPassword!: string;
  userPassword2!: String;
  userName!: string;
  phoneNumber!: number;
  certifications!: string;
  energyUsage!: number;

  unitNumber!: number;
  streetName!: string;
  city!: string;
  state!: string;
  zipCode!: number;

  msg : string = '';

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {

  }

  updateFarmer() : void{
    this.farmer.email = this.userEmail;
    this.farmer.password = this.userPassword;
    this.farmer.name = this.userName;
    this.farmer.phoneNumber = this.phoneNumber;
    this.farmer.certifications = this.certifications;
    this.farmer.energyUsage = this.energyUsage;

    this.address.city = this.city;
    this.address.state = this.state;
    this.address.street_name = this.streetName;
    this.address.unit_number = this.unitNumber;
    this.address.zip_code = this.zipCode;

    this.farmer.address = this.address;

  }

  createNewFarmer(): void{
    this.updateFarmer();

    console.log(this.farmer);

    if (this.farmer.password === this.userPassword2) {
      this._service.createNewFarmer(this.farmer).subscribe(
        data => {        
          console.log(this.farmer)
            if (this.farmer.password === this.userPassword2) {
              alert("User has been created please login again.")
              this._router.navigate(['/Login'])
            } else {
              console.log("exception occured")
              this.msg = "Passwords do not match";
            }
          },
          error => {
            console.log(error.message)
            console.log("exception occured")
          }
        )
    } else {
      console.log("exception occured")
      this.msg = "Passwords do not match";
    }



  }

}
