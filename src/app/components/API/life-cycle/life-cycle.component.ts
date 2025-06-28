import { Component, OnInit,AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{

  constructor(){
    console.log("constructor")
  }
  ngOnInit(): void {
    console.log("Ng on init")
  }//

  
  ngAfterContentChecked(): void {
    console.log("After content checked")
  }

  ngAfterViewChecked(): void {
    console.log("After view checked")
  }
  ngAfterContentInit(): void {
    console.log("After content init")
  }

  ngAfterViewInit(): void {
    console.log("After view init",performance.now())
  }

  ngOnDestroy(): void {

    const isLeave = confirm("Leaving page?")
    if(!isLeave) {
      alert("Stay at component")
    }
    console.log("After on destroy")
  }
}
