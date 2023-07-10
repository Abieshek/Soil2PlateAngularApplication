import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { Cart } from '../cart';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {
  user:  User = new User();
  address: Address = new Address();
  cart: Cart = new Cart();

  userName!: string;
  userEmail!: string;
  userPassword!: string;
  userPassword2!: string;
  phoneNumber!: number;

  unitNumber!: number;
  streetName!: string;
  city!: string;
  state!: string;
  zipCode!: number;

  msg = '';




  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }


  updateConsumer() {
    this.user.name= this.userName;
    this.user.email = this.userEmail;
    this.user.password = this.userPassword;
    this.user.phoneNumber = this.phoneNumber;

    this.address.unit_number = this.unitNumber;
    this.address.street_name = this.streetName;
    this.address.city = this.city;
    this.address.state = this.state;
    this.address.zip_code = this.zipCode;

    this.user.address = this.address;
  }

  createNewCustomer() {
    this.updateConsumer();
    if (this.user.password === this.userPassword2) {
      this._service.createNewConsumer(this.user).subscribe(
        data => {        
          console.log(this.user)
            if (this.user.password === this.userPassword2) {
              alert("User has been created please login again.")

              // call create a cart method
              console.log(data)
              this.cart.consumerId = data.consumerId
              this._service.createNewCart(this.cart).subscribe(data => {  
                this._service.setUserCart(this.cart)
              })
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
