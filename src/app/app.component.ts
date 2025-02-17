import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }


  title = 'Reactive-Form';
  userName: string ="";
  anytext: string = "";
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  contact: string = "";
  formdata: FormGroup = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    contact: new FormControl("")
  });

  onClickSubmit(data: { 
    firstname: string
    lastname: string
    email: string
    contact: string
  }) {
    this.firstname = data.firstname;
    this.lastname = data.lastname
    this.email = data.email
    this.contact = data.contact
  }

  onSubmit () {
    if(this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
