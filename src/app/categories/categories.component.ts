import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  foods!: Food[];

  constructor(private _service : RegistrationService, private _router: Router) { }
  

  ngOnInit(): void {
    this._service.getAllFoods().subscribe(data =>  {
      this.foods = data
      console.log(this.foods[0].imageLink)
    })
    console.log(this._service.getUserConsumer())
  }


  
}