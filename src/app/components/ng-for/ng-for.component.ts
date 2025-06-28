import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotavailablePipe } from '../../pipes/notavailable.pipe';
import { ProgressBarComponent } from "../reusable/progress-bar/progress-bar.component";

export interface Employee {
  empId: number;
  name: string;
  city: string | null | undefined;
  contactNo: string;
  attendance:number;
  joinDate: Date;
}

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, NotavailablePipe, ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  courseName: string = 'Angular';
  currentDate: Date = new Date();

  studentObj: { name:string; city: string; mobile: string } = {
    name: 'Ivriel',
    city: 'Malang',
    mobile: '1234567890',
  };
  cityList: string[] = ['Pune', 'Nagpur', 'Jaipur', 'Mumbai', 'Thane'];

  employeeArray: Employee[] = [
    {
      empId: 121,
      name: 'AAA',
      city: '',
      contactNo: '89405500599',
      attendance:40,
      joinDate: new Date(),
    },
    {
      empId: 122,
      name: 'BBB',
      city: null,
      contactNo: '894055545599',
      attendance:50,
      joinDate: new Date(),
    },
    {
      empId: 123,
      name: 'CCC',
      city: undefined,
      contactNo: '895455559',
      attendance:100,
      joinDate: new Date(),
    },
    {
      empId: 124,
      name: 'DDD',
      city: 'Thane',
      contactNo: '894454599',
      attendance:20,
      joinDate: new Date(),
    },
    {
      empId: 125,
      name: 'EEE',
      city: 'Nagpur',
      contactNo: '82334349',
      attendance:10,
      joinDate: new Date(),
    },
    {
      empId: 126,
      name: 'FFF',
      city: 'Pune',
      contactNo: '8545656569',
      attendance:40,
      joinDate: new Date(),
    },
  ];
}
