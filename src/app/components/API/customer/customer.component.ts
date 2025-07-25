import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../reusable/tabs/tabs.component";

@Component({
  selector: 'app-customer',
  imports: [FormsModule, ProgressBarComponent, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerTabs:string[] = ["Basic Info","Plan Info","Payments"]
  customerArray:any[] = []
  customerObj:any = {
    
      "customerId": 0,
      "customerName": "",
      "customerCity": "",
      "mobileNo": "",
      "email": ""
  }

  constructor(private service:CustomerService){
    this.getCustomers()
  }

  // getCustomers(){
  //   this.http.get("/api/CarRentalApp/GetCustomers").subscribe((res:any)=> {
  //     this.customerArray= res.data; // data api sebenarnya disimpan di value data yang berisi array data API 
  //   })
  // }

  getCustomers(){
    debugger
    this.service.getCustomer().subscribe((res:any)=> {
      debugger
      this.customerArray = res.data
    })
  }

  onSaveCustomer(){
    // Buat objek baru tanpa customerId
    const payload = {
      customerName: this.customerObj.customerName,
      customerCity: this.customerObj.customerCity,
      mobileNo: this.customerObj.mobileNo, // pastikan number
      email: this.customerObj.email
    };
    console.log(payload); // cek di console
    this.service.createNewCustomer(payload).subscribe((res:any)=> {
      if(res.result) {
        alert("Customer added successfully")
        this.getCustomers()
      } else {
        alert(res.message)
      }
    })
    this.resetCustomer()
  }

  resetCustomer(){ // kosongin form nya
    this.customerObj = {
      customerName:"",
      customerCity:"",
      mobileNo:"",
      email:""
    }
  }
}
