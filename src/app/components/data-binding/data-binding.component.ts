import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName:string = "Ivriel Gunawan"
  rollNo:number = 121
  isActive:boolean = true
  currentDate: Date = new Date()
  myPlaceholder:string = "Enter fullname..."
  div1ClassName:string = "bg-primary"
  selectedName:string = ""

  constructor(private router:Router){ // ditampilkan ketika halaman dimuat pertama kali
    console.log(this.firstName)
    console.log(this.isActive = false)
    this.showWelcomeMessage()
  }

  showWelcomeMessage(){
    alert("Welcome to Angular 19 Tutorials")
  }

  onCityChange(event:Event){
    const selectElement = event.target as HTMLSelectElement
    console.log("City changed",selectElement.value)
  }

  navigateToHome(){
    this.router.navigateByUrl("/")
  }
} 
