import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { Produce } from '../produce';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-produce-page',
  templateUrl: './produce-page.component.html',
  styleUrls: ['./produce-page.component.css'],
  providers: [RegistrationService]
})
export class ProducePageComponent implements OnInit {
  produces!: Produce[];
  id!: number;
  
  constructor(private _service : RegistrationService, private _router: Router, private route : ActivatedRoute) { }


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)
    this._service.getAllFoodsByProduceID(this.id).subscribe(data => {
      console.log(data)
      this.produces = data
    })
  }



  
}