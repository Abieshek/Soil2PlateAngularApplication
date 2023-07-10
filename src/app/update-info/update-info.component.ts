import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { Farmer } from '../farmer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
 
  address : Address = new Address();
  newFarmer: Farmer = new Farmer();
  oldFarmer: Farmer = new Farmer();
  name!: string;
  email!: string;
  password!: string;
  phoneNumber!: number;
  certifications!: string;
  energyUsage!: number;
  unitNumber!: number;
  streetName!: string;
  city!: string;
  state!: string;
  zipCode!: number;

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.oldFarmer = RegistrationService.userFarmer
    this.streetName = this.oldFarmer.address.street_name
    this.unitNumber = this.oldFarmer.address.unit_number
    this.city = this.oldFarmer.address.city
    this.state = this.oldFarmer.address.state
    this.zipCode = this.oldFarmer.address.zip_code
    this.name = this.oldFarmer.name
    this.email = this.oldFarmer.email
    this.password = this.oldFarmer.password
    this.phoneNumber = this.oldFarmer.phoneNumber
    this.certifications = this.oldFarmer.certifications
    this.energyUsage = this.oldFarmer.energyUsage
  }

 setAddress(){
   //console.log(this.oldFarmer);
   this.newFarmer= this.oldFarmer;

   this.address.unit_number = this.unitNumber;
   this.address.street_name = this.streetName;
   this.address.city = this.city;
   this.address.state = this.state;
   this.address.zip_code = this.zipCode;

   console.log(this.unitNumber);
   console.log(this.streetName);
   console.log(this.zipCode)

   this.newFarmer.address= this.address;
   console.log("newFarmer", this.newFarmer);
 }

 setFarmer(){
  this.newFarmer = this.oldFarmer;

  this.newFarmer.name = this.name;
  this.newFarmer.email = this.email;
  this.newFarmer.password = this.password;
  this.newFarmer.phoneNumber = this.phoneNumber;
  this.newFarmer.certifications = this.certifications;
  this.newFarmer.energyUsage = this.energyUsage;

  
 }

  updateInfo(){
    this.setAddress();
    this.setFarmer();
    this._service.accountFarmerFromRemote(this.newFarmer).subscribe(
        // data => { 
        
                    
        // },
        // error => {
        //   console.log(error.message)
        //   console.log("exception occured")
          
        // }
        )
    }

}
