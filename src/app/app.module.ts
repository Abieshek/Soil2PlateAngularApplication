import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountComponent } from './account/account.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateProduceListingComponent } from './create-produce-listing/create-produce-listing.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProducePageComponent } from './produce-page/produce-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessfulOrderComponent } from './successful-order/successful-order.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { UpdateProduceListingComponent } from './update-produce-listing/update-produce-listing.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountFarmerComponent } from './account-farmer/account-farmer.component';
import { AccountCreationFarmerComponent } from './account-creation-farmer/account-creation-farmer.component';
import { UpdateInfoConsumerComponent } from './update-info-consumer/update-info-consumer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FarmerProduceListingsComponent } from './farmer-produce-listings/farmer-produce-listings.component';
import { ProduceInformationComponent } from './produce-information/produce-information.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RegistrationService } from './registration.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AccountComponent,
    AccountCreationComponent,
    CategoriesComponent,
    CheckoutComponent,
    CreateProduceListingComponent,
    LandingPageComponent,
    LoginComponent,
    ProducePageComponent,
    ShoppingCartComponent,
    SignupComponent,
    SuccessfulOrderComponent,
    UpdateInfoComponent,
    UpdateProduceListingComponent,
    AccountFarmerComponent,
    AccountCreationFarmerComponent,
    UpdateInfoConsumerComponent,
    ThankYouComponent,
    FarmerProduceListingsComponent,
    ProduceInformationComponent,
    NavigationBarComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
