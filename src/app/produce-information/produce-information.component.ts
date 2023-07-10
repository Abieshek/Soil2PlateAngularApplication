import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { Food } from '../food';
import { User } from '../user';
import { OrderLine } from '../order-line';
import { Produce } from '../produce';
import { RegistrationService } from '../registration.service';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-produce-information',
  templateUrl: './produce-information.component.html',
  styleUrls: ['./produce-information.component.css'],
  providers: [RegistrationService]
})
export class ProduceInformationComponent implements OnInit {
  id!: number;
  produce: Produce = new Produce();
  quantityAdded: number = 0;
  consumer: User = new User()
  customerCart!: Cart
  newOrderLine: OrderLine = new OrderLine()


  constructor(private _service : RegistrationService, private _router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)
    this.getProduce(this.id)
    this.consumer = RegistrationService.userConsumer
    console.log(RegistrationService.userConsumer)
  }

  getProduce(id: number) {
    this._service.getProduceByID(id).subscribe( data => {
      this.produce = data
      console.log(this.produce)
    })
  }

  async addToCart() {
    // get the consumers cart based on the consumer that is logged in
    this.customerCart = await this._service.getConsumerCart(this.consumer.consumerId).toPromise()
    // assign quantity based on quantity selected
    
    this.newOrderLine.produceId = this.id
    this.newOrderLine.cartObj = this.customerCart

    console.log(this.newOrderLine)
    this._service.updateOrderLine(this.newOrderLine).subscribe(data => {})

    alert("Item has been added to your cart.")

    this._router.navigate(["/Categories"])
  }

  


}
