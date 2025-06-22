import { Component, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
  userList= resource({
    loader:()=> { 
      return fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json() as Promise<any[]>)
    }
  })

  reloadData(){
    this.userList.reload()
  }
}
