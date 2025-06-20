import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1Visible: boolean = true
  number1: string = ''
  number2:string = ''

  hideDiv1(){
    this.div1Visible = false
  }
  showDiv1(){
    this.div1Visible = true
  }
  toggleDiv(){
    this.div1Visible = !this.div1Visible
  }
}
