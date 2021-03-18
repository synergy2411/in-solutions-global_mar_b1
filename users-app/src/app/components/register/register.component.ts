import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  registerForm : FormGroup;

  constructor(private fb : FormBuilder) { 
     this.registerForm =  this.fb.group({
      email : this.email,
      password : this.password
    })
  }

  onRegister(){
    console.log(this.registerForm);
  }

  ngOnInit(): void {
  }

}
