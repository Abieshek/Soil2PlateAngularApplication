import { Component, OnInit } from '@angular/core';
import { Farmer } from '../farmer';
import { Produce } from '../produce';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-produce-listings',
  templateUrl: './farmer-produce-listings.component.html',
  styleUrls: ['./farmer-produce-listings.component.css']
})
export class FarmerProduceListingsComponent implements OnInit {
  produces!: Produce[];
  farmer!: Farmer;

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.farmer = this._service.getUserFarmer()
    console.log(this.farmer)
    this._service.getAllFoodsByFarmerID(this.farmer.farmerId).subscribe(data => {
      console.log(data)
      this.produces = data
    })
  
    
  }

}
