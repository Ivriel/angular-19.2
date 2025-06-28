import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl:string = "/api/CarRentalApp/"
  constructor(private http:HttpClient) { }

  getCustomer(){
    debugger
    return this.http.get(this.apiUrl+"GetCustomers")
  }

  createNewCustomer(obj:any){
    return this.http.post(this.apiUrl+"CreateNewCustomer",obj)
  }
}
