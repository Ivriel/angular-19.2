import { Component } from '@angular/core';
import { ProgressBarComponent } from '../reusable/progress-bar/progress-bar.component';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-admin',
  imports: [ProgressBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private http:HttpClient, private customerService:CustomerService){
    this.getUsers()
    this.customerService.tokenReceived$.subscribe((res:boolean)=> {
      if(res){
        this.getUsers()
      }
    })
  }
  getUsers(){
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUser").subscribe((res:any)=> {
      debugger;
    })
  }
}
