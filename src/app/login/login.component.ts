import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RegistrationService]
})
export class LoginComponent implements OnInit {
  //create user variable the object of type user
   userEmail!: String;
   userPassword!: String;
   userType: String = 'isConsumer';
   user!: User;
   farmer!: Farmer;
   msg = '';

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    
    console.log(this.userEmail);
    if (this.userType === "isConsumer") {
      // Login Consumer
      this._service.loginUserFromRemote(this.userEmail).subscribe(
        data => { 
          //console.log(data)
          this.user = data;
          console.log("Frontend object",this.user)
          
          if (this.userPassword === this.user.password) {
            this._service.setUserConsumer(this.user)
            this._service.setIsConsumer(true)
            this._service.getConsumerCart(this.user.consumerId).subscribe(data => {
              this._service.setUserCart(data)
              console.log(data)
            })
            this._router.navigate(['/Categories'])
          } else {
            console.log("exception occured")
            this.msg = "Invalid email or password";
          }
        },
        error => {
          console.log(error.message)
          console.log("exception occured")
          this.msg = "Invalid email or password";
        }
      )
    } else if (this.userType === "isFarmer") {
      // Login Farmer
      this._service.loginFarmerFromRemote(this.userEmail).subscribe(
          data => {
            this.farmer = data;
            
            console.log("Frontend object",this.farmer);
            if (this.userPassword === this.farmer.password) {              
              this._service.setUserFarmer(this.farmer)
              this._service.setIsFarmer(true)
              this._router.navigate(['/FarmerProduceList'])


           } else {
              console.log("exception occured")
              this.msg = "Invalid email or password";
            }
          },
          error => {
            console.log(error.message)
            console.log("exception occured")
            this.msg = "Invalid email or password";
          } 
          
      )
    }
    
  }
  

}
