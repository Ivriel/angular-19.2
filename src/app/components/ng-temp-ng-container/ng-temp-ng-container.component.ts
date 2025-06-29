import { Component } from '@angular/core';
import { Employee } from '../ng-for/ng-for.component';
import { CommonModule } from '@angular/common';
import { NotavailablePipe } from '../../pipes/notavailable.pipe';
@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [CommonModule,NotavailablePipe],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css'
})

export class NgTempNgContainerComponent {

  isLoader:boolean = true

  constructor(){
    setTimeout(() => {
      this.isLoader = false
    }, 3000);
  }

  employeeArray: Employee[] = [
    {
      empId: 121,
      name: 'AAA',
      city: '',
      contactNo: '89405500599',
      attendance:40,
      joinDate: new Date(),
      isActive:false
    },
    {
      empId: 122,
      name: 'BBB',
      city: null,
      contactNo: '894055545599',
      attendance:50,
      joinDate: new Date(),
      isActive:false
    },
    {
      empId: 123,
      name: 'CCC',
      city: undefined,
      contactNo: '895455559',
      attendance:100,
      joinDate: new Date(),
      isActive:true
    },
    {
      empId: 124,
      name: 'DDD',
      city: 'Thane',
      contactNo: '894454599',
      attendance:20,
      joinDate: new Date(),
      isActive:false
    },
    {
      empId: 125,
      name: 'EEE',
      city: 'Nagpur',
      contactNo: '82334349',
      attendance:10,
      joinDate: new Date(),
      isActive:true
    },
    {
      empId: 126,
      name: 'FFF',
      city: 'Pune',
      contactNo: '8545656569',
      attendance:40,
      joinDate: new Date(),
      isActive:false
    },
  ];
}