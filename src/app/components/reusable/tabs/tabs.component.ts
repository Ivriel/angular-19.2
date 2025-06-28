import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit{
  currentTab:string = ""
  @Input() tabList:string[] = []
  @Output() onTabClicked = new EventEmitter<string>()
  constructor(){

  }
  ngOnInit(): void {
    this.currentTab = this.tabList[0]
  }

  onTabChange(tabName:string){
    debugger;
    this.currentTab = tabName
    this.onTabClicked.emit(tabName)
  }

}
