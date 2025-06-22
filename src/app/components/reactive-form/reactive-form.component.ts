import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  formValue:any
  formSubmitted:boolean = false
  clearPrint:boolean = false
  userForm:FormGroup = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required,Validators.minLength(5)]),
    userName:new FormControl("",[Validators.email,Validators.required]),
    city:new FormControl(""),
    state:new FormControl("Jawa Timur"),
    zip:new FormControl(""),
    isAgree: new FormControl(false)
  })

  constructor(){ // disable dan enable form control tertentu
    this.userForm.controls['state'].disable()
    setTimeout(() => {
      this.userForm.controls['state'].enable()
    }, 5000);
  }

  onUserSave(){
    if(this.userForm.valid) {
      this.formValue = {...this.userForm.value}
      this.formSubmitted = true
      this.clearPrint = false
      console.log("Form submitted",this.formValue)
      this.userForm.reset() 
    }
  }

  hideValue(){
    if(this.formSubmitted) {
      this.clearPrint = true
    }
  }

}
