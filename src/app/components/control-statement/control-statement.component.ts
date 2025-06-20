import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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

  hideShowDiv1(value:boolean) {
    this.div1Visible = value
  }
}
