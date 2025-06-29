import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 tokenExpired$:Subject<boolean> = new Subject<boolean>()
 tokenReceived$:Subject<boolean> = new Subject<boolean>()
  private apiUrl:string = "/api/CarRentalApp/"
  constructor(private http:HttpClient) {  }

  getCustomer(){
    debugger
    return this.http.get(this.apiUrl+"GetCustomers")
  }

  createNewCustomer(obj:any){
    return this.http.post(this.apiUrl+"CreateNewCustomer",obj)
  }
}
