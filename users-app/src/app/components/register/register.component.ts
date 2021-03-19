import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamation,
  ]);
  cnfPassword = new FormControl('', [
    Validators.required,
    this.confirmPassword,
  ]);

  confirmPassword(input : FormControl){
    // console.log(input);
    if(input.root && input.root.value){
      // console.log("Password - ", input.root.value.password);
      const isPasswordMatch = input.root.value.password === input.value;
      return isPasswordMatch ? null : {passwordMatch : true}
    }
  }

  hasExclamation(input: FormControl) {
    const hasExcl = input.value.indexOf('!') >= 0;
    return hasExcl ? null : { hasExclamation: true };
  }

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: this.email,
      password: this.password,
      cnfPassword : this.cnfPassword
    });
  }

  onRegister() {
    console.log(this.registerForm);
  }

  ngOnInit(): void {}
}
