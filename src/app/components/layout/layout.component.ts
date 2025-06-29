import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-layout',
  imports: [HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router)
  customerService = inject(CustomerService)
  http = inject(HttpClient)

  constructor(){
    this.customerService.tokenExpired$.subscribe((res:boolean)=> {
      if (res) {
        debugger
        const loggedData = localStorage.getItem("angular19TokenData")
        if(loggedData) {
          const loggedUser = JSON.parse(loggedData) // ubah semua string biasa ke satu objek 
          const obj= {
            "emailId": loggedUser.emailId,
            "token":loggedUser.token,
            "refreshToken":loggedUser.refreshToken
          }
          this.http.post("https://projectapi.gerasim.in/api/UserApp/refresh",obj).subscribe((res:any)=> {
            debugger
            localStorage.setItem("angular19User",res.data.userId)
            localStorage.setItem("angular19Token",res.data.token)
            localStorage.setItem("angular19TokenData",JSON.stringify(res.data))
            this.customerService.tokenReceived$.next(true)
          })
        }
      }
    })
  }

  onLogout(){
    localStorage.removeItem("angular19User")
    this.router.navigateByUrl("login")
  }
}
