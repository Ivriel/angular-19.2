import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
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

  constructor(){ // ditampilkan ketika halaman dimuat pertama kali
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
} 
