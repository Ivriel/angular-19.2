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
        this.router.navigateByUrl("admin")
    },
    error=> {
      console.error(error)
      alert("Wrong Credentials")
    }
  )
  }
}
