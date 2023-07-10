import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-update-info-consumer',
  templateUrl: './update-info-consumer.component.html',
  styleUrls: ['./update-info-consumer.component.css']
})
export class UpdateInfoConsumerComponent implements OnInit {

  address : Address = new Address();
  newConsumer: User = new User();
  oldConsumer: User = new User();
  name!: string;
  email!: string;
  password!: string;
  phoneNumber!: number;
  unitNumber!: number;
  streetName!: string;
  city!: string;
  state!: string;
  zipCode!: number;
  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.oldConsumer = RegistrationService.userConsumer
    this.streetName = this.oldConsumer.address.street_name
    this.unitNumber = this.oldConsumer.address.unit_number
    this.city = this.oldConsumer.address.city
    this.state = this.oldConsumer.address.state
    this.zipCode = this.oldConsumer.address.zip_code
    this.name = this.oldConsumer.name
    this.email = this.oldConsumer.email
    this.password = this.oldConsumer.password
    this.phoneNumber = this.oldConsumer.phoneNumber
  

  }

  setAddress(){
    //console.log(this.oldConsumer);
    this.newConsumer= this.oldConsumer;
 
    this.address.unit_number = this.unitNumber;
    this.address.street_name = this.streetName;
    this.address.city = this.city;
    this.address.state = this.state;
    this.address.zip_code = this.zipCode;
 
    console.log(this.unitNumber);
    console.log(this.streetName);
    console.log(this.zipCode)
 
    this.newConsumer.address= this.address;
    console.log("newConsumer", this.newConsumer);
  }

  setConsumer(){
    this.newConsumer = this.oldConsumer;
  
    this.newConsumer.name = this.name;
    this.newConsumer.email = this.email;
    this.newConsumer.password = this.password;
    this.newConsumer.phoneNumber = this.phoneNumber;
     
    
   }

   updateInfo(){
    this.setAddress();
    this.setConsumer();
    this._service.accountConsumerFromRemote(this.newConsumer).subscribe(
        
        )
    }

}
