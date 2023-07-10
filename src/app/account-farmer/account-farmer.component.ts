import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-account-farmer',
  templateUrl: './account-farmer.component.html',
  styleUrls: ['./account-farmer.component.css']
})
export class AccountFarmerComponent implements OnInit {

  //farmerID!: Farmer;

  //constructor(private _address : RegistrationService, private _router: Router) { }


  ngOnInit(): void {
    
    }

    updateAddress(){
  // let farmerID= this._router.get('farmerID')
  // console.log(farmerID);
  // farmerID && this.accountFarmerFromRemote(farmer.Address).subscribe((data))=>{
  //   console.log(data);
  //   this.farmerID=data;

  // })
  }
    
  }


