import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Employee {
  empId:number;
  name:string;
  city:string;
  contactNo:string;
  joinDate:Date;
}

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})

export class NgForComponent {
  cityList:string[] = ["Pune","Nagpur","Jaipur","Mumbai","Thane"]

  employeeArray:Employee[] = [
    {
      empId:121,
      name:'AAA',
      city:'Pune',
      contactNo:'89405500599',
      joinDate: new Date()
    },
    {
      empId:122,
      name:'BBB',
      city:'Jaipur',
      contactNo:'894055545599',
      joinDate: new Date()
    },
    {
      empId:123,
      name:'CCC',
      city:'Mumbai',
      contactNo:'895455559',
      joinDate: new Date()
    },
    {
      empId:124,
      name:'DDD',
      city:'Thane',
      contactNo:'894454599',
      joinDate: new Date()
    },
    {
      empId:125,
      name:'EEE',
      city:'Nagpur',
      contactNo:'82334349',
      joinDate: new Date()
    },
    {
      empId:126,
      name:'FFF',
      city:'Pune',
      contactNo:'8545656569',
      joinDate: new Date()
    },
  ]
}
