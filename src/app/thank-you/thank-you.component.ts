import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Address } from '../address';
import { Cart } from '../cart';
import { Farmer } from '../farmer';
import { Produce } from '../produce';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})

export class ThankYouComponent implements OnInit {
  addressArray: Address[] = []
  cart!: Cart
  produceId!: number
  currentProduce!: Produce
  farmerId!: number
  currentFarmer!: Farmer
  currentAddress!: Address

  constructor(private _service : RegistrationService, private _router: Router) { }

  async ngOnInit() {
    
    this.cart = await this._service.getCartByID(RegistrationService.userConsumer.consumerId).toPromise()
    console.log(this.cart)

    this.findAddressFromCart()
    
  }

  async findAddressFromCart() {
    
    // iterating through all orderlines and their resepctive products
    for(let i = 0; i < this.cart.orderLine.length; i++) {
      // Current product being checked for address
      this.produceId = this.cart.orderLine[i].produceId
      console.log(this.produceId)

      this.currentProduce = await this._service.getProduceByID(this.produceId).toPromise()
      console.log(this.currentProduce)
      
      this.currentFarmer = await this._service.getFarmerByID(this.currentProduce.farmerID).toPromise()
      console.log(this.currentFarmer)

      this.currentAddress = this.currentFarmer.address

      /**
       * if (!this.addressArray.includes(this.currentAddress)) {
        this.addressArray.push(this.currentAddress)
      }

       */
      if (this.addressArray.length === 0) {
        this.addressArray.push(this.currentAddress)
        
      } else {
        let included = false;
        for (let j = 0; j < this.addressArray.length; j++) {
          if(this.addressArray[i].unit_number === this.currentAddress.unit_number 
            && this.addressArray[i].street_name === this.currentAddress.street_name 
            && this.addressArray[i].city === this.currentAddress.city) {
            included = true;
          }
        }
        console.log(included)
        if (!included) {
          this.addressArray.push(this.currentAddress)
          included = false;
        }
      }



    }
  }

  deleteCart() {
    for(let i = 0; i < this.cart.orderLine.length; i++) {
      this._service.deleteOrderLineByID(this.cart.orderLine[i].orderLineId).subscribe()
    }
  }

}
