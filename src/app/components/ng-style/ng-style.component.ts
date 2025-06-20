import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ng-style',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  div1BackColor:string =''
  isChecked:boolean = false

  myCss:any ={
    'background-color':'red',
    'width':'200px',
    'height':'200px'
  }

  addDiv1Color(color:string){
    this.div1BackColor = color
  }
}
