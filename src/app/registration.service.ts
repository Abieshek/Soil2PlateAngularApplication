import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Farmer } from './farmer';
import { ProducePageComponent } from './produce-page/produce-page.component';
import { Produce } from './produce';

import { Food } from './food';
import { Cart } from './cart';
import { OrderLine } from './order-line';
import { fakeAsync } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
 
// Objects
 farmer: Farmer= new Farmer();
 consumer: User= new User();
 produce: Produce= new Produce();
 food: Food = new Food();
 cart: Cart = new Cart();
 orderLine: OrderLine = new OrderLine();

 // LOGGED IN USER
 isConsumer: Boolean = true;
 userFarmer: Farmer = new Farmer();
 userConsumer: User = new User();



 // LOGGED IN USER
 static isConsumer: Boolean = false;
 static isFarmer: Boolean = false;
 static userFarmer: Farmer 
 static userConsumer: User
 static userCart: Cart




  private baseUrlCart = "http://localhost:8080";
  private baseUrlProduce = "http://localhost:8081/produce";
  private baseUrlUser = "http://localhost:8082";

  //inject http client using a constractor (dependency injection)
  constructor( private _http :HttpClient) { }



// GETTERS AND SETTERS
  public setFarmerObject(newFarmer : Farmer){
    this.farmer = newFarmer; 
  }
  public getFarmerObject(){
    return this.farmer;
  }

  public getConsumerType(){
    return this.isConsumer
  }



// GETTERS AND SETTERS
  public setUserFarmer(newFarmer: Farmer) {
    RegistrationService.userFarmer = newFarmer
  }
  public setUserConsumer(newConsumer: User) {
    RegistrationService.userConsumer = newConsumer
    console.log(RegistrationService.userConsumer)
  }
  public setUserCart(newCart: Cart) {
    RegistrationService.userCart = newCart
  }


  public getUserFarmer(){
    return RegistrationService.userFarmer
  }
  public getUserConsumer(){
    return RegistrationService.userConsumer
    console.log(RegistrationService.userConsumer)
  }
  public getUserCart() {
    return RegistrationService.userCart
  }

  public getIsConsumer(){
    return RegistrationService.isConsumer
  }
  public getIsFarmer() {
    return RegistrationService.isFarmer
  }

  public setIsConsumer(input: Boolean) {
    RegistrationService.isConsumer = input;
  }
  public setIsFarmer(input: Boolean) {
    RegistrationService.isFarmer = input;
  }


  // Get consumer cart
  public getConsumerCart(requestParam: number) {
    return this._http.get<any>(`${this.baseUrlCart}/consumer-cart/${requestParam}`)
  }

  // update OrderLine
  public updateOrderLine(requestParam: OrderLine) {
    return this._http.post<any>(`${this.baseUrlCart}/orders`, requestParam)
  }

  // create customer Cart
  public createNewCart(requestParam: Cart) {
    return this._http.post<any>(`${this.baseUrlCart}/carts`, requestParam)
  }

  //Getting consumer object based on email
  public loginUserFromRemote(requestParam: String):Observable<any>{
    console.log(requestParam);
    return this._http.get<any>(`${this.baseUrlUser}/consumers/${requestParam}/email`);
  }
  // Getting farmer Object based on email
  public loginFarmerFromRemote(requestParam: String):Observable<any>{
    console.log(requestParam);
    return this._http.get<any>(`${this.baseUrlUser}/farmers/${requestParam}/email`);
  }

  // Update Farmer
  public accountFarmerFromRemote(farmer: Farmer):Observable<any>{
      return this._http.put<any>(`${this.baseUrlUser}/farmers`, farmer);
  }

  //update consumer
  public accountConsumerFromRemote(user: User):Observable<any>{
    return this._http.put<any>(`${this.baseUrlUser}/consumers`, user);
}
  
  // Create a new consumer
  public createNewConsumer(user: User): Observable<User> {
    return this._http.post<User>(`${this.baseUrlUser}/addConsumer`, user);
  }
  
  public createNewFarmer(farmer : Farmer): Observable<Farmer> {
    return this._http.post<Farmer>(`${this.baseUrlUser}/addFarmer`, farmer);
  }

  // get farmer by farmer id
  public getFarmerByID(requestParam: Number): Observable<any> {
    return this._http.get<any>(`${this.baseUrlUser}/farmers/${requestParam}`);
  }

  public createNewProduce(produce : Produce): Observable<Produce> {
    return this._http.post<Produce>(`${this.baseUrlProduce}/addProduce`, produce);
  }
  // List of all foods
  public getAllFoods(): Observable<any> {
    return this._http.get<any>(`${this.baseUrlProduce}/foods`);
  }

  // List of all produces by Food ID
  public getAllFoodsByProduceID(requestParam: Number): Observable<any> {
    return this._http.get<any>(`${this.baseUrlProduce}/${requestParam}/byFood`);
  }

  // List of all produces by Farmer ID
  public getAllFoodsByFarmerID(requestParam: Number): Observable<any> {
    return this._http.get<any>(`${this.baseUrlProduce}/${requestParam}/byFarmer`)
  }

  // get cart by ID
  public getCartByID(requestParam: Number): Observable<any> {
    return this._http.get<any>(`${this.baseUrlCart}/carts/${requestParam}`)
  }

  // get Produce by produce ID 
  public getProduceByID(requestParam: Number): Observable<any> {
    return this._http.get<any>(`${this.baseUrlProduce}/${requestParam}/byId`)
  }

  // delete orderline
  public deleteOrderLineByID(requestParam: Number) {
    return this._http.delete(`${this.baseUrlCart}/orders/${requestParam}`)
  }



}
