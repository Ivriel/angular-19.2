import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-api',
  imports: [FormsModule,CommonModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  showCars:boolean = true
  constructor(){
    // this.getAllCars() agar ketika component baru ditampilkan, langsung jalan untuk get all carsnya 
  }

  carList:any[] = []
  carObj:any = {
    "CarId": 0,
  "brand": "",
  "model": "",
  "year": 0,
  "color": "",
  "dailyRate": 0,
  "carImage": "",
  "regNo": ""
  }
  http = inject(HttpClient) //cara lain membuat object httpClient

  getAllCars(){
    this.http.get("/api/CarRentalApp/GetCars").subscribe((res:any)=> { 
      this.carList= res.data // data adalah variabel yang bernilai array. Dimana nilainya adalah data api yang akan di fetch. coba liat struktur api nya 
    })
  }

  hideAllCars(){
    this.showCars = !this.showCars
  }

  onSaveCar(){
    debugger;
    this.http.post("/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((res:any)=> {
      if(res.result){ /// status code. property dari API. kalau status codenya 200
        alert("Successfully created car")
        this.getAllCars()
        this.resetCarObj()
      } else {
        alert(res.message) // properti dari API nya
      }
    })
  }

  resetCarObj() {
    this.carObj = {
      "CarId": 0,
      "brand": "",
      "model": "",
      "year": 0,
      "color": "",
      "dailyRate": 0,
      "carImage": "",
      "regNo": ""
    }
  }
}
