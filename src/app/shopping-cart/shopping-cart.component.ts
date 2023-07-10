import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { Food } from '../food';
import { OrderLine } from '../order-line';
import { Produce } from '../produce';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  cart!: Cart
  cartArray: any[] = [];
  currentProduce!: Produce;
  orderLineArray: OrderLine[] = [];
  produceArray: Produce[] = [];
  

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.initializeCart()
  }

  async initializeCart() {
    this.cart = await this._service.getConsumerCart(RegistrationService.userConsumer.consumerId).toPromise()
    console.log(this.cart)

    this.orderLineArray = this.cart.orderLine

    console.log(this.orderLineArray[0].produceId)
    
    for(let i = 0; i < this.orderLineArray.length; i ++) {
      this.produceArray[i] = await this._service.getProduceByID(this.orderLineArray[i].produceId).toPromise()
    }

    console.log(this.orderLineArray)
    console.log(this.produceArray)


    for(let i = 0; i < this.orderLineArray.length; i++) {
      this.cartArray.push({ord: this.orderLineArray[i], prod: this.produceArray[i]})
    }
    console.log(this.cartArray)

  }



  deleteCartItem(id: number) {
    console.log(id)
    this._service.deleteOrderLineByID(id).subscribe()
    this.cartArray = this.cartArray.filter(item => item.ord.orderLineId !== id)
    console.log(this.cartArray)
  }
  /**
   * deleteAllCartItems() {
      for(let i = 0; i < this.cartArray.length; i++) {
        this._service.deleteOrderLineByID(this.cartArray[i].ord.orderLineId).subscribe()
      }
    }
   */


}
