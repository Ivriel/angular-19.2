import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  formSubmitted: boolean = false
  userObj:any = {
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isTermsAgree:false
  }

  onSave(){
    debugger;
    const formValue = this.userObj
  }

  onSubmit(form:NgForm) {
    this.formSubmitted = true
  
    if(form.valid) {
      const formValue = {...this.userObj} // salin datanya agar  ga kereset. karena data awal masih disimpan sebagai referensi
      console.log("Form submitted: ",formValue)
      form.resetForm()
      this.formSubmitted = false // supaya semua error required hilang setelah form dikirim
    }
  }
}
