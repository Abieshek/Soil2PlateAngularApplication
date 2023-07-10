import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produce } from '../produce';
import { RegistrationService } from '../registration.service';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Farmer } from '../farmer';
import { Food } from '../food';


@Component({
  selector: 'app-create-produce-listing',
  templateUrl: './create-produce-listing.component.html',
  styleUrls: ['./create-produce-listing.component.css']
})
export class CreateProduceListingComponent implements OnInit {
  icon=faCalendar;
  produce : Produce = new Produce();

    name!: string
    type!: string
    price!: number
    quantity!: number
    description!: string
    availableFrom!: Date
    availableUntil!: Date
    surplusStatus!: boolean
    produceCo2!: number
    calories!: number
    vitamins!: number
    allergyInformation!: string
    imageLink!: string

    msg : string = ''

    farmer!: Farmer

    foods!: Food[]

    foodObj!: Food

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    // Fetch all foods 
    this._service.getAllFoods().subscribe(data =>  {
      this.foods = data
    });

    this.farmer = RegistrationService.userFarmer
  }

  updateProduce() : void{
    this.produce.name = this.name;
    this.produce.type = this.type;
    this.produce.price = this.price;
    this.produce.quantity = this.quantity;
    this.produce.description = this.description;
    this.produce.availableFrom = this.availableFrom;
    this.produce.availableUntil = this.availableUntil;
    this.produce.surplusStatus = this.surplusStatus;
    this.produce.produceCO2 = this.produceCo2;
    this.produce.calories = this.calories;
    this.produce.vitamins = this.vitamins;
    this.produce.allergyInformation = this.allergyInformation;
    this.produce.imageLink= this.imageLink;

    // getting the farmer that is logged in 
    console.log(this.farmer.farmerId)

    // updating the produce farmer ID based on that
    this.produce.farmerID = this.farmer.farmerId;

    // updated food object tied to produce
    this.produce.foodObj = this.foodObj;

  }

  createNewProduce(): void {
    this.updateProduce();

    this._service.createNewProduce(this.produce).subscribe(
      data => {       
        console.log(data);
       })

  }

}
