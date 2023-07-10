import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SignupComponent } from './signup/signup.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { AccountFarmerComponent } from './account-farmer/account-farmer.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { AccountCreationFarmerComponent } from './account-creation-farmer/account-creation-farmer.component';
import { AccountComponent } from './account/account.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { UpdateInfoConsumerComponent } from './update-info-consumer/update-info-consumer.component';
import { CreateProduceListingComponent } from './create-produce-listing/create-produce-listing.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

import { ProducePageComponent } from './produce-page/produce-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { FarmerProduceListingsComponent } from './farmer-produce-listings/farmer-produce-listings.component';
import { UpdateProduceListingComponent } from './update-produce-listing/update-produce-listing.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProduceInformationComponent } from './produce-information/produce-information.component';


const routes: Routes = [
 { path: '', component: LandingPageComponent},
 { path: 'Login', component: LoginComponent},
 { path: 'LandingPage', component: LandingPageComponent },
 { path: 'loginsuccess', component: LoginsuccessComponent},
 { path: 'SignUp', component: SignupComponent},
 { path: 'AccountCreation', component: AccountCreationComponent},
 { path: 'AccountCreationFarmer', component: AccountCreationFarmerComponent},
 { path: 'Account', component: AccountComponent},
 { path: 'AccountFarmer', component: AccountFarmerComponent},
 { path: 'updateInfo', component: UpdateInfoComponent},
 { path: 'AboutUs', component: AboutUsComponent},
 { path: 'updateInfoConsumer', component: UpdateInfoConsumerComponent},
 { path: 'createProduceListing', component: CreateProduceListingComponent},
 { path: 'thankyou', component: ThankYouComponent},
 { path: 'ProducePage/:id', component: ProducePageComponent},
 { path: 'Categories', component: CategoriesComponent },
 { path: 'FarmerProduceList', component: FarmerProduceListingsComponent },
 { path: 'UpdateProduceListing', component: UpdateProduceListingComponent },
 { path: 'ShoppingCart', component: ShoppingCartComponent },
 { path: 'ProduceInformation/:id', component: ProduceInformationComponent }
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
