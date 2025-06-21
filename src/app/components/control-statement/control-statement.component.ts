import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../ng-for/ng-for.component';
@Component({
  selector: 'app-control-statement',
  imports: [FormsModule,CommonModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  div1Visible: boolean = true
  isChecked: boolean = false
  dayName: string = ""

  cityList:string[] = [
    "Pune",
    "Mumbai",
    "Thane",
    "Panji",
    "Hyperabad"
  ]

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

  hideShowDiv1(value:boolean) {
    this.div1Visible = value
  }
}
