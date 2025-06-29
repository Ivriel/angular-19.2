import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any = {
    username:'',
    password:''
  }

  apiLoginObj:any = {
    "EmailId":"",
    "Password":""
  }

  http = inject(HttpClient)
  router = inject(Router) // sama kayak pakai constructor

  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.apiLoginObj).subscribe((res:any)=> {
      debugger;
      localStorage.setItem("angular19User",res.data.userId)
      localStorage.setItem("angular19Token",res.data.token) // masukkan token ke local storage kalau berhasil login
      localStorage.setItem("angular19TokenData",JSON.stringify(res.data)) // convert semua data di satu objek ke string
        this.router.navigateByUrl("admin")
    },
    error=> {
      console.error(error)
      alert("Wrong Credentials")
    }
  )
  }
}
