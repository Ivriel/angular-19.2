import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  firstName = signal("Ivriel")
  lastName = signal<string>("Gunawan")
  courseName:string = "Angular"
  rollNo = signal<number>(0)

  constructor(){
    const value = this.firstName()
    setTimeout(() => {
      this.courseName = 'Next JS'
      this.firstName.set("Dei Gratia")
    }, 5000);
  }

  onIncrement(){
    this.rollNo.update(oldValue=>oldValue+1)
  }
}
