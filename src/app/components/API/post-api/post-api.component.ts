import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, OnInit,ViewChild,viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../reusable/tabs/tabs.component';
import { Car,ICarList } from '../../../models/car';


@Component({
  selector: 'app-post-api',
  imports: [FormsModule,CommonModule,TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit,AfterViewInit {
  showCars:boolean = true 
  @ViewChild('txtCity') cityTextbox : ElementRef | undefined
  @ViewChild(TabsComponent) myTabViewChild: TabsComponent | undefined

  currentTab:string ="Car List"
  constructor(){
    // this.getAllCars() agar ketika component baru ditampilkan, langsung jalan untuk get all carsnya 
  }

  ngOnInit(): void {
    this.getAllCars()
  }
  ngAfterViewInit(): void {
    console.log("after view init",performance.now())
  }

  onTabChange(tabName:string){
    debugger;
    this.currentTab = tabName
  }

  readCity(){
    debugger
    const city = this.cityTextbox?.nativeElement.value
    if(this.cityTextbox) {
      this.cityTextbox.nativeElement.style.color="red"
    }
    const value = this.myTabViewChild?.currentTab
  }

  carList:ICarList[] = []
  carObj:Car = new Car(); // inisialisasi method 
  http = inject(HttpClient) //cara lain membuat object httpClient

  getAllCars(){
    // Untuk menyembunyikan setiap individu mobil, bukan satu tabel
    // this.http.get("/api/CarRentalApp/GetCars").subscribe((res: any) => {
    //   this.carList = res.data.map((car: any) => ({
    //     ...car,
    //     isHidden: false // Tambahan flag untuk menyembunyikan sementara
    //   }));
    // });

    this.http.get("/api/CarRentalApp/GetCars").subscribe((res:any)=> { 
      this.carList= res.data // data adalah variabel yang bernilai array. Dimana nilainya adalah data api yang akan di fetch. coba liat struktur api nya 
    })
  }

  // Untuk menyembunyikan setiap individu mobil, bukan satu tabel
  // hideCar(index: number) {
  //   this.carList[index].isHidden = true;
  // }

  // untuk menampilkan mobil mobil yang tadinya disembunyikan secara satu per satu bukan langsung satu tabel
  // showAllCars() {
  //   this.carList.forEach(car => car.isHidden = false);
  // }

  
// kode HTML nya 
//   <tr *ngFor="let car of carList; let i = index" [hidden]="car.isHidden">
//   <td>{{ i + 1 }}</td>
//   <td>{{ car.brand }}</td>
//   <td>{{ car.model }}</td>
//   <td>{{ car.regNo }}</td>
//   <td>{{ car.dailyRate }}</td>
//   <td>
//     <button class="btn btn-sm btn-danger" (click)="hideCar(i)">Hide</button>
//   </td>
// </tr>

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
        this.carObj = new Car() // reinisialisasi object
      } else {
        alert(res.message) // properti dari API nya
      }
    })
  }

  onEdit(data:any){
    debugger
    this.carObj = {...data}; // untuk mempopulate data dari mobil yang di klik. data didapatkan lalu diisi di form. datanya dari api disalin dulu baru salinannya dikasih untuk diedit. jadi tidak akan teredit secara real time. hanya ketika tombol edit ditekan maka data di api akan teredit 
  }

  onDelete(id:number){
    debugger
    const isDelete = confirm("Are you sure want to delete?")
    if(isDelete){
      this.http.delete("/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((res:any)=> {
        if(res.result){
          alert("Car is deleted successfully")
          this.getAllCars()
        } else {
          alert(res.message)
        }
      })
    }
  }

  updateCar(){
    debugger
    this.http.put("/api/CarRentalApp/UpdateCar",this.carObj).subscribe((res:any)=> {
      if(res.result) {
        alert("Car updated successfully")
        this.getAllCars()
        this.resetCarObj()
      } else {
        alert(res.message)
      }
    })
  }

  resetCarObj() {
    this.carObj = {
      "carId": 0,
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
