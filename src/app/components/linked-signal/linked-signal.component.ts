import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  firstName = signal<string>("Ivriel")
  lastName = signal<string>("")

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions,previous)=> {
      debugger;
      const fullName = newOptions + " " + this.lastName()
      return fullName
    }
  })

  user = signal({id:111,name:"Gunawan"})

  email = linkedSignal({
    source:this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal:(a:any,b:any)=> a.id !== b.id
  })

  changeName(){
    this.firstName.set("Gunawan")
  }

  changeId(){
    debugger;
    this.user.set({id:123,name:"Gunawan"})
  }
}
